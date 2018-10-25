// in src/App.js
import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import "./App.css";
import { UserList } from "./User";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { PostList, PostEdit, PostCreate } from "./Post";
import buildPrismaProvider from "react-admin-prisma";
import russianMessages from "ra-language-russian";

const messages = {
  ru: russianMessages
};
const i18nProvider = locale => messages[locale];

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }
  componentDidMount() {
    buildPrismaProvider({
      clientOptions: {
        uri: "https://eu1.prisma.sh/konstantin-3742aa/demo/dev" // NOT WORKING IN 40.112.93.232:4466/dev !!! "gitlub - BACKEND-2"
        // НУЖНО BACKEND-2 передеплоить на что-то другое !!! https://api-useast.graphcms.com/v1/cjiacyow100ob01eqwnghonw2/master --->  TEST!!!
        // https://eu1.prisma.sh/konstantin-3742aa/demo/dev - иногда блокируется!
      }
    }).then(dataProvider => {
      console.log(dataProvider);
      this.setState({ dataProvider });
    });
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin
        locale="ru"
        i18nProvider={i18nProvider}
        messages={messages}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        authProvider={authProvider}
      >
        <Resource name="User" list={UserList} icon={UserIcon} />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
      </Admin>
    );
  }
}
export default App;
//
