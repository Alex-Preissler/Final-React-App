import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
	  type: 'dark',
	},
  });

const App = () => (
	<BrowserRouter>
		<MuiThemeProvider theme={ theme }>
			<MainRouter/>
		</MuiThemeProvider>
	</BrowserRouter>
)

export default App;
