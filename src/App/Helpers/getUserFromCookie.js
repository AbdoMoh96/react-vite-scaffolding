import Cookie from "js-cookie";

const User = JSON.parse(Cookie.get('user') ?? null);
export default User;