import { useEffect, useRef, useReducer, Reducer } from 'react'

type ApiStatus = 'idle' | 'fetching' | 'fetched' | 'error'

type ApiAction =
  | { type: 'FETCHING' }
  | { type: 'FETCHED'; payload: any }
  | { type: 'FETCH_ERROR'; payload: string }

interface ApiState {
  status: ApiStatus;
  error: string | null;
  data: any[];
}

const initialState: ApiState = {
  status: 'idle',
  error: null,
  data: [],
}

const fetchReducer: Reducer<ApiState, ApiAction> = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, status: 'fetching' }
    case 'FETCHED':
      return { ...state, status: 'fetched', data: action.payload }
    case 'FETCH_ERROR':
      return { ...state, status: 'error', error: action.payload }
    default:
      return state;
  }
}

const useApi = (api: string) => {

  const cacheData = useRef<{ [key: string]: any }>({})

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    let revokeRequest = false

    if (!api || !api.trim()) return

    const renderData = async () => {
      dispatch({ type: 'FETCHING' })

      if (cacheData.current[api]) {
        const data = cacheData.current[api]
        dispatch({ type: 'FETCHED', payload: data })
      } else {
        try {
          const res = await fetch(api)
          const data = await res.json()
          cacheData.current[api] = data
          console.log('fetched data')

          if (revokeRequest) return
          dispatch({ type: 'FETCHED', payload: data })
        } catch (error) {
          if (revokeRequest) return;
          dispatch({ type: 'FETCH_ERROR', payload: (error as Error).message })
        }
      }
    }

    renderData()

    return function cleanup() {
      revokeRequest = true
    }
  }, [api])

  return state
}

export default useApi