// 动态设定协议、主机名和端口，便于部署
// 本地开发时需要调整
const baseURL = `${document.location.protocol}//${document.location.hostname}:${document.location.port}/api`;
export default baseURL;
