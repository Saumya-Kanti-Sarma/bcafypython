import { create } from 'zustand'

type SidebarStore = {
  visible: boolean
  toggleSidebar: () => void
}


const useSidebarStore = create<SidebarStore>((set) => ({
  visible: false,
  toggleSidebar: () =>
    set((state) => ({ visible: !state.visible })),
}))

export default useSidebarStore