"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[164],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(h,l(l({ref:a},c),{},{components:t})):n.createElement(h,l({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1163:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const o={},l="LakeSoul's Supports for Python and Machine Learning",s={unversionedId:"Usage Docs/machine-learning-support",id:"Usage Docs/machine-learning-support",title:"LakeSoul's Supports for Python and Machine Learning",description:"LakeSoul implements interfaces for PyTorch/PyArrow/HuggingFace/Ray, allowing users to retrieve datasets from LakeSoul tables through the interfaces. Distributed reading is supported for both PyTorch and Ray. LakeSoul for Python has now released 1.0 Beta.",source:"@site/docs/03-Usage Docs/11-machine-learning-support.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/machine-learning-support",permalink:"/docs/Usage Docs/machine-learning-support",draft:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/11-machine-learning-support.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Presto to Query LakeSoul's Table",permalink:"/docs/Usage Docs/setup-presto"},next:{title:"Multi-tenant: Workspace and Role Permission Control",permalink:"/docs/Usage Docs/workspace-and-rbac"}},i={},u=[{value:"Install",id:"install",level:2},{value:"Download LakeSoul wheel file",id:"download-lakesoul-wheel-file",level:3},{value:"Install python virtual enviroment",id:"install-python-virtual-enviroment",level:3},{value:"PyTorch API Usage",id:"pytorch-api-usage",level:2},{value:"Ray DataSource",id:"ray-datasource",level:2},{value:"PyArrow/Pandas Reads LakeSoul Table",id:"pyarrowpandas-reads-lakesoul-table",level:2}],c={toc:u},p="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lakesouls-supports-for-python-and-machine-learning"},"LakeSoul's Supports for Python and Machine Learning"),(0,r.kt)("p",null,"LakeSoul implements interfaces for PyTorch/PyArrow/HuggingFace/Ray, allowing users to retrieve datasets from LakeSoul tables through the interfaces. Distributed reading is supported for both PyTorch and Ray. LakeSoul for Python has now released 1.0 Beta."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("h3",{id:"download-lakesoul-wheel-file"},"Download LakeSoul wheel file"),(0,r.kt)("p",null,"For users of Python 3.8, Python 3.9, and Python 3.10, we have prepared different wheel files for each version. Please\ndownload the appropriate one based on your requirements. We will publish official package to pypi.org in near future."),(0,r.kt)("p",null,"The Python package currently only supports Linux systems and can be used on distros with GLibc 2.17 and above (Centos 7 and above, Ubuntu 16.04 and above, etc.)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Python 3.8\nusers: ",(0,r.kt)("a",{parentName:"li",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b1-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"},"lakesoul-1.0.0b1-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl")),(0,r.kt)("li",{parentName:"ul"},"For Python 3.9\nusers: ",(0,r.kt)("a",{parentName:"li",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b1-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"},"lakesoul-1.0.0b1-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl")),(0,r.kt)("li",{parentName:"ul"},"For Python 3.10\nusers: ",(0,r.kt)("a",{parentName:"li",href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b1-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"},"lakesoul-1.0.0b1-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"))),(0,r.kt)("p",null,"Assuming we are using Python 3.8, we can down load the wheel file as below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b0-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl\n")),(0,r.kt)("h3",{id:"install-python-virtual-enviroment"},"Install python virtual enviroment"),(0,r.kt)("p",null,"We have provide several AI training examples using LakeSoul as data source. Follow the below instructions to setup a testing environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# change python version if needed\nconda create -n lakesoul_test python=3.8\nconda acitvate lakesoul_test\ngit clone https://github.com/lakesoul-io/LakeSoul.git\ncd LakeSoul/python/examples\n# replace ${PWD} with your wheel file directory in requirements.txt\npip install -r requirements.txt\n")),(0,r.kt)("h2",{id:"pytorch-api-usage"},"PyTorch API Usage"),(0,r.kt)("p",null,"LakeSoul implements interfaces for PyTorch/HuggingFace, which allows users to directly export data from LakeSoul tables into HuggingFace datasets."),(0,r.kt)("p",null,"API for reading tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import datasets\nimport lakesoul.huggingface\n\ndataset = datasets.IterableDataset.from_lakesoul(\"lakesoul_table\", partitions={'split': 'train'})\n")),(0,r.kt)("p",null,"You can create a PyTorch/HuggingFace dataset for training. The distributed training environment is automatically aware and no additional parameters are required when initializing the dataset."),(0,r.kt)("p",null,"Below is an example code that exports the feature-transformed ",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/competitions/titanic"},"Titanic"),"\ndataset from LakeSoul and then trains and validates a DNN model using the dataset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import argparse\nimport pandas as pd\nimport numpy as np\nimport torch\nimport torch.nn as nn\nimport torch.nn.functional as F\nimport torch.nn.init as init\n\nimport datasets\nimport lakesoul.huggingface\n\nfrom torch.autograd import Variable\n\n# hyper parameters\nSEED = 0\ntorch.manual_seed(SEED)\ntorch.cuda.manual_seed(SEED)\nbatch_size = 50\nnum_epochs = 50\nlearning_rate = 0.01\nweight_decay = 0.005\n\n# label and feature columns\nlabel_column = 'label'\nfeature_columns = 'f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18,f19,f20,f21,f22,f23,f24,f25,f26'.split(\n    ',')\n\n\nclass Net(nn.Module):\n    def __init__(self):\n        super(Net, self).__init__()\n        self.bn = nn.BatchNorm1d(26)\n        self.fc1 = nn.Linear(26, 256, bias=True)\n        self.fc2 = nn.Linear(256, 2, bias=True)\n        self._initialize_weights()\n\n    def forward(self, x):\n        x = self.bn(x)\n        x = self.fc1(x)\n        x = F.relu(x)\n        x = self.fc2(x)\n        x = torch.sigmoid(x)\n        return x\n\n    def _initialize_weights(self):\n        for m in self.modules():\n            if isinstance(m, nn.Linear):\n                init.xavier_uniform_(m.weight)\n                if m.bias is not None:\n                    init.constant_(m.bias, 0)\n\n\ndef batchify(dataset, batch_size):\n    X_train = []\n    y_train = []\n    for i, item in enumerate(dataset):\n        feature_list = [item[feature] for feature in feature_columns]\n        X_train.append(feature_list)\n        y_train.append(int(item[label_column]))\n        if len(y_train) == batch_size:\n            yield X_train, y_train\n            X_train = []\n            y_train = []\n    # Handle the remaining records that don't fill up a full batch\n    if len(y_train) > 0:\n        yield X_train, y_train\n\n\ndef train_model(net, datasource, num_epochs, batch_size, learning_rate):\n    dataset = datasets.IterableDataset.from_lakesoul(datasource, partitions={'split': 'train'})\n\n    criterion = nn.CrossEntropyLoss()\n    optimizer = torch.optim.AdamW(net.parameters(), lr=learning_rate, weight_decay=weight_decay)\n\n    for epoch in range(num_epochs):\n        if epoch % 5 == 0:\n            print('Epoch {}'.format(epoch + 1))\n        for X_train, y_train in batchify(dataset, batch_size):\n            x_var = Variable(torch.FloatTensor(X_train))\n            y_var = Variable(torch.LongTensor(y_train))\n            optimizer.zero_grad()\n            ypred_var = net(x_var)\n            loss = criterion(ypred_var, y_var)\n            loss.backward()\n            optimizer.step()\n\n\ndef evaluate_model(net, datasource, batch_size):\n    dataset = datasets.IterableDataset.from_lakesoul(datasource, partitions={'split': 'val'})\n    num_samples = 0\n    num_correct = 0\n\n    for X_val, y_val in batchify(dataset, batch_size):\n        batch_size = len(y_val)\n        test_var = Variable(torch.FloatTensor(X_val))\n        with torch.no_grad():\n            result = net(test_var)\n        values, labels = torch.max(result, 1)\n        num_right = np.sum(labels.data.numpy() == y_val)\n        num_samples += batch_size\n        num_correct += num_right\n\n    accuracy = num_correct / num_samples\n    print('Accuracy {:.2f}'.format(accuracy))\n\n\ndef main(table):\n    net = Net()\n    train_model(net, table, batch_size, num_epochs, learning_rate)\n    evaluate_model(net, table, batch_size)\n\n\nif __name__ == '__main__':\n    parser = argparse.ArgumentParser()\n    parser.add_argument('--table', type=str, default='titanic_trans', help='lakesoul table name')\n    args = parser.parse_args()\n\n    main(args.table)\n\n")),(0,r.kt)("p",null,"More Examples at  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lakesoul-io/LakeSoul/tree/main/python/examples"},"LakeSoul/python/examples")),(0,r.kt)("h2",{id:"ray-datasource"},"Ray DataSource"),(0,r.kt)("p",null,"LakeSoul implements Ray's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ray.io/en/latest/data/api/doc/ray.data.Datasource.html"},"Datasource"),". The following is an example of calling code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import ray.data\nimport lakesoul.ray\nds = ray.data.read_lakesoul(\"table_name\", partitions={'split': 'train'})\n")),(0,r.kt)("h2",{id:"pyarrowpandas-reads-lakesoul-table"},"PyArrow/Pandas Reads LakeSoul Table"),(0,r.kt)("p",null,"LakeSoul can support single-machine reading of data and use PyArrow and Pandas for calculations. LakeSoul returns PyArrow's ",(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/generated/pyarrow.dataset.Dataset.html"},"Dataset")," object when reading, supporting iterative access. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from lakesoul.arrow import lakesoul_dataset\n\nds = lakesoul_dataset(\"table_name\", partitions={'split': 'train'})\n\n# iterate batches in dataset\n# this will not load entire table to memory\nfor batch in ds.to_batches():\n     ...\n\n# convert to pandas table\n# this will load entire table into memory\ndf = ds.to_table().to_pandas()\n")))}d.isMDXComponent=!0}}]);