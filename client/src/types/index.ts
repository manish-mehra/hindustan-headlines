export type NewsSource = {
  name: string
  scrapedFrom: string
  endpoint: string
}

export type NewsItemProps = {
  title: string
  description: string | ''
  url: string | ''
  image: string | ''
  timestamp: string | ''
}

export type ApiStatus = 'idle' | 'fetching' | 'fetched' | 'error'

export type ApiAction =
  | { type: 'FETCHING' }
  | { type: 'FETCHED'; payload: any }
  | { type: 'FETCH_ERROR'; payload: string }

interface ApiResponseWithData<T> {
    status: ApiStatus;
    error: string | null;
    data: T;
}
  
interface ApiResponseWithoutData {
    status: ApiStatus;
    error: string | null;
    data: null;
}
  
export type ApiState<T> = ApiResponseWithData<T> | ApiResponseWithoutData;
  