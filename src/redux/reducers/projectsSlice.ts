import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios'

interface ProjectsState {
  process: {
    loading: boolean
    error: any
  }
  items: Array<{
    id: string | null
    name: string | null
    displayName: string | null
    createdAt: string | null
    updatedAt: string | null
  }>
  pagination: {
    total: number
    page: number
    size: number
  }
}

const initialState: ProjectsState = {
  process: {
    loading: false,
    error: null
  },
  items: [{
    id: null,
    name: null,
    displayName: null,
    createdAt: null,
    updatedAt: null
  }],
  pagination: {
    total: 0,
    page: 0,
    size: 0
  }
}

export const fetchProjects = createAsyncThunk(
  'projects/fetch',
  async (): Promise<ProjectsState> => {
    try {
      const response = await axios.post('https://imoogoo.com/api/v1/projects')
      return response.data
    } catch (e: any) {
      return e.message
    }
  }
)

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.process.loading = true
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.process.loading = false
        state.items = action.payload.items
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.process.loading = false
        state.process.error = action.payload
      })
  }
})

export const selectProjectsLoading = (state: RootState): boolean => state.projects.process.loading
export const selectProjectsError = (state: RootState): any => state.projects.process.error
export const selectProjectsItems = (state: RootState): Array<{
  id: string | null
  name: string | null
  displayName: string | null
  createdAt: string | null
  updatedAt: string | null
}> => state.projects.items
export const selectProjectsPagination = (state: RootState): {
  total: number
  page: number
  size: number
} => state.projects.pagination
export default projectsSlice.reducer
