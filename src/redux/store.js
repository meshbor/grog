// Только добавь редьюсер
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';

const composeEnhancers = composeWithDevTools({ name: 'GROG_STORE' });

export const store = createStore((state) => state, { names: [] }, composeEnhancers(applyMiddleware()));

if (window.Cypress) {
  window.store = store;
}
