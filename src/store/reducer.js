export const universalReducer = (state = {}, action) => {
  switch (action.type) {
    case "@bill/updated":
      const newBill = action.payload;
      return {
        ...state,
        bill: newBill,
      };
    case "@persons/updated":
      const newPersons = action.payload;
      return {
        ...state,
        persons: newPersons,
      };
    case "@selectedButton/updated":
      const newButton = action.payload;
      return {
        ...state,
        selectedButton: newButton,
      };
    case "@tipAmount/updated":
      const newTipAmount = action.payload;
      return {
        ...state,
        tipAmount: newTipAmount,
      };
    case "@personAlert/updated":
      const newPersonAlert = action.payload;
      return {
        ...state,
        personAlert: newPersonAlert,
      };
    case "@personAmount/updated":
      const newPersonAmount = action.payload;
      return {
        ...state,
        personAmount: newPersonAmount,
      };
    case "@allValues/reset":
      return {
        ...state,
        bill: "",
        persons: "",
        selectedButton: "",
        tipAmount: 0,
        personAmount: 0,
        personAlert: false,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
