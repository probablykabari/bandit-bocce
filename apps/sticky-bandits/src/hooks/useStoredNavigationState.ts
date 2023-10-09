import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect, useCallback } from "react"
import { Linking, Platform } from "react-native"

const PERSISTENCE_KEY = 'navigation_state_v1'

export const useStoredNavigationState = () => {
  const [initialState, setInitialState] = useState<NavigationPreloadState>()

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
          const state = savedStateString ? JSON.parse(savedStateString) : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    restoreState()
  }, [])

  const storeNavigationState = useCallback(async (state: NavigationPreloadState) => {
    await AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
  }, [])

  return [initialState, storeNavigationState] as const
}
