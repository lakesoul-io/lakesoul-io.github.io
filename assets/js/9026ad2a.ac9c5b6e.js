"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[164],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,f=p["".concat(i,".").concat(h)]||p[h]||m[h]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={},l="LakeSoul's Supports for Python and Machine Learning",s={unversionedId:"Usage Docs/machine-learning-support",id:"Usage Docs/machine-learning-support",title:"LakeSoul's Supports for Python and Machine Learning",description:"LakeSoul implements interfaces for PyTorch/PyArrow/HuggingFace, allowing users to store machine learning datasets in LakeSoul and read data from LakeSoul tables through the interfaces. LakeSoul for Python has now released 1.0 Beta.",source:"@site/docs/03-Usage Docs/11-machine-learning-support.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/machine-learning-support",permalink:"/docs/Usage Docs/machine-learning-support",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/11-machine-learning-support.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Presto to Query LakeSoul's Table",permalink:"/docs/Usage Docs/setup-presto"},next:{title:"Multi-tenant: Workspace and Role Permission Control",permalink:"/docs/Usage Docs/workspace-and-rbac"}},i={},u=[{value:"Install",id:"install",level:2},{value:"Download LakeSoul wheel file",id:"download-lakesoul-wheel-file",level:3},{value:"Install python virtual enviroment",id:"install-python-virtual-enviroment",level:3},{value:"API Usage",id:"api-usage",level:2}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lakesouls-supports-for-python-and-machine-learning"},"LakeSoul's Supports for Python and Machine Learning"),(0,r.kt)("p",null,"LakeSoul implements interfaces for PyTorch/PyArrow/HuggingFace, allowing users to store machine learning datasets in LakeSoul and read data from LakeSoul tables through the interfaces. LakeSoul for Python has now released 1.0 Beta."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("h3",{id:"download-lakesoul-wheel-file"},"Download LakeSoul wheel file"),(0,r.kt)("p",null,"For users of Python 3.8, Python 3.9, and Python 3.10, we have prepared different wheel files for each version. Please\ndownload the appropriate one based on your requirements. We will publish official package to pypi.org in near future."),(0,r.kt)("p",null,"The Python package currently only supports Linux systems and can be used on distros with GLibc 2.17 and above (Centos 7 and above, Ubuntu 16.04 and above, etc.)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Python 3.8\nusers: ",(0,r.kt)("a",{parentName:"li",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b0-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"},"lakesoul-1.0.0b0-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl")),(0,r.kt)("li",{parentName:"ul"},"For Python 3.9\nusers: ",(0,r.kt)("a",{parentName:"li",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b0-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"},"lakesoul-1.0.0b0-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl")),(0,r.kt)("li",{parentName:"ul"},"For Python 3.10\nusers: ",(0,r.kt)("a",{parentName:"li",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"},"lakesoul-1.0.0b0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"))),(0,r.kt)("p",null,"Assuming we are using Python 3.8, we can down load the wheel file as below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b0-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl\n")),(0,r.kt)("h3",{id:"install-python-virtual-enviroment"},"Install python virtual enviroment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n lakesoul_test python=3.8\nconda acitvate lakesoul_test\n# replace ${PWD} with your working directory\npip install -r requirements.txt\n")),(0,r.kt)("h2",{id:"api-usage"},"API Usage"),(0,r.kt)("p",null,"LakeSoul implements interfaces for PyTorch/HuggingFace, which allows users to directly export data from LakeSoul tables\ninto HuggingFace datasets."),(0,r.kt)("p",null,"Below is an example code that exports the feature-transformed ",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/competitions/titanic"},"Titanic"),"\ndataset from LakeSoul and then trains and validates a DNN model using the dataset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import argparse\nimport pandas as pd\nimport numpy as np\nimport torch\nimport torch.nn as nn\nimport torch.nn.functional as F\nimport torch.nn.init as init\n\nimport datasets\nimport lakesoul.huggingface\n\nfrom torch.autograd import Variable\n\n# hyper parameters\nSEED = 0\ntorch.manual_seed(SEED)\ntorch.cuda.manual_seed(SEED)\nbatch_size = 50\nnum_epochs = 50\nlearning_rate = 0.01\nweight_decay = 0.005\n\n# label and feature columns\nlabel_column = 'label'\nfeature_columns = 'f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18,f19,f20,f21,f22,f23,f24,f25,f26'.split(\n    ',')\n\n\nclass Net(nn.Module):\n    def __init__(self):\n        super(Net, self).__init__()\n        self.bn = nn.BatchNorm1d(26)\n        self.fc1 = nn.Linear(26, 256, bias=True)\n        self.fc2 = nn.Linear(256, 2, bias=True)\n        self._initialize_weights()\n\n    def forward(self, x):\n        x = self.bn(x)\n        x = self.fc1(x)\n        x = F.relu(x)\n        x = self.fc2(x)\n        x = torch.sigmoid(x)\n        return x\n\n    def _initialize_weights(self):\n        for m in self.modules():\n            if isinstance(m, nn.Linear):\n                init.xavier_uniform_(m.weight)\n                if m.bias is not None:\n                    init.constant_(m.bias, 0)\n\n\ndef batchify(dataset, batch_size):\n    X_train = []\n    y_train = []\n    for i, item in enumerate(dataset):\n        feature_list = [item[feature] for feature in feature_columns]\n        X_train.append(feature_list)\n        y_train.append(int(item[label_column]))\n        if len(y_train) == batch_size:\n            yield X_train, y_train\n            X_train = []\n            y_train = []\n    # Handle the remaining records that don't fill up a full batch\n    if len(y_train) > 0:\n        yield X_train, y_train\n\n\ndef train_model(net, datasource, num_epochs, batch_size, learning_rate):\n    dataset = datasets.IterableDataset.from_lakesoul(datasource, partitions={'split': 'train'})\n\n    criterion = nn.CrossEntropyLoss()\n    optimizer = torch.optim.AdamW(net.parameters(), lr=learning_rate, weight_decay=weight_decay)\n\n    for epoch in range(num_epochs):\n        if epoch % 5 == 0:\n            print('Epoch {}'.format(epoch + 1))\n        for X_train, y_train in batchify(dataset, batch_size):\n            x_var = Variable(torch.FloatTensor(X_train))\n            y_var = Variable(torch.LongTensor(y_train))\n            optimizer.zero_grad()\n            ypred_var = net(x_var)\n            loss = criterion(ypred_var, y_var)\n            loss.backward()\n            optimizer.step()\n\n\ndef evaluate_model(net, datasource, batch_size):\n    dataset = datasets.IterableDataset.from_lakesoul(datasource, partitions={'split': 'val'})\n    num_samples = 0\n    num_correct = 0\n\n    for X_val, y_val in batchify(dataset, batch_size):\n        batch_size = len(y_val)\n        test_var = Variable(torch.FloatTensor(X_val))\n        with torch.no_grad():\n            result = net(test_var)\n        values, labels = torch.max(result, 1)\n        num_right = np.sum(labels.data.numpy() == y_val)\n        num_samples += batch_size\n        num_correct += num_right\n\n    accuracy = num_correct / num_samples\n    print('Accuracy {:.2f}'.format(accuracy))\n\n\ndef main(table):\n    net = Net()\n    train_model(net, table, batch_size, num_epochs, learning_rate)\n    evaluate_model(net, table, batch_size)\n\n\nif __name__ == '__main__':\n    parser = argparse.ArgumentParser()\n    parser.add_argument('--table', type=str, default='titanic_trans', help='lakesoul table name')\n    args = parser.parse_args()\n\n    main(args.table)\n\n")),(0,r.kt)("p",null,"More Examples at  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/tree/main/python/examples"},"LakeSoul/python/examples")))}m.isMDXComponent=!0}}]);