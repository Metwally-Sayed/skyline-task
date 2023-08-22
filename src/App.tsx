import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./componenets/LoginForm";
import Products from "./componenets/Pages/Products";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Cart from "./componenets/Pages/cart";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
