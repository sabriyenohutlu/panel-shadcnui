import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Suspense } from "react";
import { Provider } from 'react-redux';
import router from './router/index';
import store from './store/index';

createRoot(document.getElementById("root")!).render(
  <Suspense>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Suspense>
);
