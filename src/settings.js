import createPersistedState from 'use-persisted-state'

const useIsCameraMirrored = createPersistedState('isCameraMirrored')

export default function useSettings() {
  const [isCameraMirrored, setIsCameraMirrored] = useIsCameraMirrored(true)
  return {
    isCameraMirrored,
    setIsCameraMirrored,
  }
}
