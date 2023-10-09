import { D, O, R, pipe } from '@mobily/ts-belt'

/**
 * wrapped in a function to allow live reloading in dev
 */
const readConfig = () => {
  const config = {
    cloudinaryName: process.env.EXPO_PUBLIC_CLOUDINARY_NAME,
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseFunctionsUrl: process.env.EXPO_PUBLIC_SUPABASE_FUNCTIONS_URL,
    supabaseToken: process.env.EXPO_PUBLIC_SUPABASE_TOKEN,
    imageKitUrl: process.env.EXPO_PUBLIC_IMAGEKIT_URL,
    imageKitKey: process.env.EXPO_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    clerkTemplate: process.env.EXPO_PUBLIC_CLERK_TEMPLATE,
    clerkKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    giphyKey: process.env.EXPO_PUBLIC_GIPHY_API_KEY
  } as const

  return config
}

type ConfigKey = keyof ReturnType<typeof readConfig>

/**
 *
 * @param key {ConfigKey}
 * @throws if config key does not have a value
 */
export function getConfigValue(key: ConfigKey) {
  return pipe(readConfig(), D.get(key), O.toResult(`Missing config value for ${key}`), R.getExn)
}

export function getConfigValueWithDefault(key: ConfigKey, defaultValue: string): string {
  return pipe(
    R.fromExecution(() => getConfigValue(key)),
    R.getWithDefault(defaultValue)
  )
}

export function printConfig() {
  console.debug(JSON.stringify(readConfig(), null, 4))
}
