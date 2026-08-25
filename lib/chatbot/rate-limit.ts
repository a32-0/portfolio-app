import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW } from '@/lib/chatbot/constants'

const hasUpstashConfig = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
)

let ratelimit: Ratelimit | undefined
function getRatelimit() {
  if (!ratelimit) {
    ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW),
      prefix: 'chatbot',
      analytics: false,
    })
  }
  return ratelimit
}

export async function checkRateLimit(identifier: string) {
  if (!hasUpstashConfig) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set.')
    }
    console.warn('[chat] Upstash not configured — skipping rate limiting (dev only).')
    return { success: true, remaining: Infinity, reset: 0 }
  }

  const { success, remaining, reset } = await getRatelimit().limit(identifier)
  return { success, remaining, reset }
}
