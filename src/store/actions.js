export const changeBill = (bill) => {
  return {
    type: "@bill/updated",
    payload: bill,
  };
};
export const changePersons = (persons) => {
  return {
    type: "@persons/updated",
    payload: persons,
  };
};
export const changeSelectedButton = (selectedButton) => {
  return {
    type: "@selectedButton/updated",
    payload: selectedButton,
  };
};
export const setTipAmount = (tipAmount) => {
  return {
    type: "@tipAmount/updated",
    payload: tipAmount,
  };
};
export const setPersonAlert = (boolean) => {
  return {
    type: "@personAlert/updated",
    payload: boolean,
  };
};
export const setPersonAmount = (personAmount) => {
  return {
    type: "@personAmount/updated",
    payload: personAmount,
  };
};
export const resetValues = () => {
  return {
    type: "@allValues/reset"
  };
};
