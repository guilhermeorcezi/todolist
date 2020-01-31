import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
}

html, body, #root{
  height: 100%;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}

body{
  font-family: 'Roboto', sans-serif;
  background-color:rgb(236, 241, 248);
  -webkit-font-smoothing: antialiased !important;
}
`;
