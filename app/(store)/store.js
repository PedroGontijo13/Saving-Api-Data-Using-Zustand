import { create } from "zustand";

const useStore = create((set) => ({
    repos: [{}],
    saveRepos: (newRepos) => set({ repos: newRepos })
}))

export default useStore;