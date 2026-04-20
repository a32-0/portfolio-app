'use client'

import { useEffect, useRef } from 'react'

const vertSrc = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragSrc = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec3 u_color;

  void main() {
    vec2 uv = (2.0 * gl_FragCoord.xy - u_resolution) / u_resolution.y;

    float a = 0.0;
    float d = 0.0;

    for (int i = 0; i < 4; i++) {
      float fi = float(i);
      a += cos(fi - d + u_time * 0.5 - a * uv.x);
      d += sin(fi * uv.y + a);
    }

    float wave      = (sin(a) + cos(d)) * 0.5;
    float brightness = clamp(0.08 + 0.45 * wave, 0.0, 1.0);

    // Subtle hue shift: primary color bleeds into a slightly cooler tint
    float shift  = 0.12 * sin(a * 1.5 + u_time * 0.2);
    vec3 tinted  = u_color + vec3(-shift * 0.2, shift * 0.1, shift * 0.3);
    tinted       = clamp(tinted, 0.0, 1.0);

    gl_FragColor = vec4(tinted * brightness, 1.0);
  }
`

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  return shader
}

function hexToVec3(hex: string): [number, number, number] {
  const h = hex.trim().replace('#', '')
  const r = parseInt(h.slice(0, 2), 16) / 255
  const g = parseInt(h.slice(2, 4), 16) / 255
  const b = parseInt(h.slice(4, 6), 16) / 255
  return [r, g, b]
}

export default function HeroWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl')
    if (!gl) return

    const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc)
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc)

    const program = gl.createProgram()!
    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)
    gl.useProgram(program)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const posLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const timeLoc  = gl.getUniformLocation(program, 'u_time')
    const resLoc   = gl.getUniformLocation(program, 'u_resolution')
    const colorLoc = gl.getUniformLocation(program, 'u_color')

    // Read --color-primary from CSS
    const rawColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary')
      .trim()
    const [r, g, b] = hexToVec3(rawColor || '#0001f7')
    gl.uniform3f(colorLoc, r, g, b)

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    const startTime = performance.now()
    let rafId: number

    const render = () => {
      gl.uniform1f(timeLoc, (performance.now() - startTime) * 0.001)
      gl.uniform2f(resLoc, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
