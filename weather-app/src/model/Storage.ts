export const storage = {
  getItem: (name: string) => {
    const item = localStorage.getItem(name);

    if (item) {
      return JSON.parse(item);
    }
  },
  setItem: (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item))
  }
}