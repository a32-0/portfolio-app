import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW } from '@/lib/chatbot/constants'

const hasUpstashConfig = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
)

// Lazy: an in-memory counter would reset per serverless instance, and building at module
// scope would break the build before Upstash is configured.
let ratelimit: Ratelimit | undefined
function getRatelimit() {
  if (!ratelimit) {
    ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW),
      prefix: 'chatbot',
      // Doubles Redis commands against the free-tier quota. Flip on for the Upstash dashboard.
      analytics: false,
    })
  }
  return ratelimit
}

export async function checkRateLimit(identifier: string) {
  if (!hasUpstashConfig) {
    // Fail closed in production: an unprotected /api/chat is the unbounded-cost risk itself.
    if (process.env.NODE_ENV === 'production') {
      throw new Error('UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set.')
    }
    console.warn('[chat] Upstash not configured — skipping rate limiting (dev only).')
    return { success: true, remaining: Infinity, reset: 0 }
  }

  const { success, remaining, reset } = await getRatelimit().limit(identifier)
  return { success, remaining, reset }
}
