import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";

import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import { PostList  } from "./pages/posts/list";
import { PostShow } from "./pages/posts/show";
import { PostEdit } from "./pages/posts/edit";
import { PostCreate } from "./pages/posts/create";

function App() {
  return (
    <Refine
      notificationProvider={notificationProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      resources={[{ 
        name: "posts", 
        list: PostList,
        show: PostShow,
        edit: PostEdit, 
        create: PostCreate,
      canDelete: true,}]}
    />
  );
}

export default App;
