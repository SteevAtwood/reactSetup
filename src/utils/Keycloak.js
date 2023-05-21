import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://164.68.102.104:8080/",
 realm: "keycloak-react-auth",
 clientId: "React-auth",
});

export default keycloak;


