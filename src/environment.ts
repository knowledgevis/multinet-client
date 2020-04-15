export const host: string = process.env.VUE_APP_MULTINET_HOST || 'http://localhost:5000';
export const gaTag: string = process.env.VUE_APP_GA_TAG || '';
export const gitSha: string = process.env.VUE_APP_GIT_SHA || '';

interface VisApp {
  name: string;
  url: string;
}

const defaultApps = [
  {
    name: "Nodelink",
    url: "http://multinet.app/nodelink"
  },
  {
    name: "Adjacency Matrix",
    url: "http://multinet.app/adjmatrix"
  }
];

console.log(process.env.VUE_APP_VIS_REGISTRY);

export const visApps: VisApp[] = JSON.parse(process.env.VUE_APP_VIS_REGISTRY) || defaultApps;
