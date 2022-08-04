export const imgError = {
  inserted: (el, { value }) => {
    el.onerror = () => {
        el.src = value;
    };
  },
};
