import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState, addDispatch } from './store'

export const useAppDispatch = () => useDispatch<addDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
