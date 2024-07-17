"use strict";(self.webpackChunklakesoul_website=self.webpackChunklakesoul_website||[]).push([[7288],{286:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=a(5893),s=a(1151);const l={},r="LakeSoul Python \u63a5\u53e3\u548c\u5bf9\u673a\u5668\u5b66\u4e60\u6846\u67b6\u7684\u652f\u6301",o={id:"Usage Docs/machine-learning-support",title:"LakeSoul Python \u63a5\u53e3\u548c\u5bf9\u673a\u5668\u5b66\u4e60\u6846\u67b6\u7684\u652f\u6301",description:"LakeSoul \u5b9e\u73b0\u4e86 PyTorch/ PyArrow/ HuggingFace / Ray \u7684\u6570\u636e\u6e90\u63a5\u53e3\uff0c \u7528\u6237\u53ef\u4ee5\u4f7f\u7528 LakeSoul \u5b58\u50a8\u673a\u5668\u5b66\u4e60\u6570\u636e\u96c6\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u8bfb\u53d6 LakeSoul \u8868\u7684\u6570\u636e\uff0c\u652f\u6301\u5206\u5e03\u5f0f\u8bfb\u53d6\u3002\u76ee\u524d",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-Usage Docs/11-machine-learning-support.md",sourceDirName:"03-Usage Docs",slug:"/Usage Docs/machine-learning-support",permalink:"/zh-Hans/docs/Usage Docs/machine-learning-support",draft:!1,unlisted:!1,editUrl:"https://github.com/lakesoul-io/LakeSoul/tree/main/website/docs/03-Usage Docs/11-machine-learning-support.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Presto \u67e5\u8be2 LakeSoul \u8868",permalink:"/zh-Hans/docs/Usage Docs/setup-presto"},next:{title:"\u591a\u79df\u6237\u529f\u80fd\uff1a\u5de5\u4f5c\u7a7a\u95f4\u548c\u89d2\u8272\u6743\u9650\u63a7\u5236",permalink:"/zh-Hans/docs/Usage Docs/workspace-and-rbac"}},i={},c=[{value:"\u5b89\u88c5\u65b9\u6cd5",id:"\u5b89\u88c5\u65b9\u6cd5",level:2},{value:"\u4e0b\u8f7d LakeSoul Wheel\u6587\u4ef6",id:"\u4e0b\u8f7d-lakesoul-wheel\u6587\u4ef6",level:3},{value:"\u5b89\u88c5 python \u865a\u62df\u73af\u5883",id:"\u5b89\u88c5-python-\u865a\u62df\u73af\u5883",level:3},{value:"LakeSoul \u73af\u5883\u642d\u5efa",id:"lakesoul-\u73af\u5883\u642d\u5efa",level:3},{value:"PyTorch \u4f7f\u7528\u8bf4\u660e",id:"pytorch-\u4f7f\u7528\u8bf4\u660e",level:2},{value:"Ray \u8bfb\u53d6 LakeSoul \u8868",id:"ray-\u8bfb\u53d6-lakesoul-\u8868",level:2},{value:"PyArrow/Pandas \u8bfb\u53d6 LakeSoul \u8868",id:"pyarrowpandas-\u8bfb\u53d6-lakesoul-\u8868",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lakesoul-python-\u63a5\u53e3\u548c\u5bf9\u673a\u5668\u5b66\u4e60\u6846\u67b6\u7684\u652f\u6301",children:"LakeSoul Python \u63a5\u53e3\u548c\u5bf9\u673a\u5668\u5b66\u4e60\u6846\u67b6\u7684\u652f\u6301"}),"\n",(0,t.jsx)(n.p,{children:"LakeSoul \u5b9e\u73b0\u4e86 PyTorch/ PyArrow/ HuggingFace / Ray \u7684\u6570\u636e\u6e90\u63a5\u53e3\uff0c \u7528\u6237\u53ef\u4ee5\u4f7f\u7528 LakeSoul \u5b58\u50a8\u673a\u5668\u5b66\u4e60\u6570\u636e\u96c6\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7\u63a5\u53e3\u8bfb\u53d6 LakeSoul \u8868\u7684\u6570\u636e\uff0c\u652f\u6301\u5206\u5e03\u5f0f\u8bfb\u53d6\u3002\u76ee\u524d\nPython \u63a5\u53e3\u53d1\u5e03\u4e86 1.0 Beta \u7248\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5\u65b9\u6cd5",children:"\u5b89\u88c5\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0b\u8f7d-lakesoul-wheel\u6587\u4ef6",children:"\u4e0b\u8f7d LakeSoul Wheel\u6587\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u4f7f\u7528Python 3.8\u3001Python 3.9\u548cPython 3.10\u7684\u7528\u6237\uff0c\u6211\u4eec\u4e3a\u6bcf\u4e2a\u7248\u672c\u51c6\u5907\u4e86\u4e0d\u540c\u7684wheel\u6587\u4ef6\u3002\u8bf7\u6839\u636e\u60a8\u7684\u9700\u6c42\u4e0b\u8f7d\u9002\u5f53\u7684\u4e00\u4e2a\u3002\u6211\u4eec\u8fd1\u671f\u4f1a\u53d1\u5e03\u6b63\u5f0f\u7248\u7684\u5305\u5230 pypi.org."}),"\n",(0,t.jsxs)(n.p,{children:["Python \u5305\u76ee\u524d\u4ec5\u652f\u6301 Linux x86_64 \u7cfb\u7edf\u3002Python \u5305\u57fa\u4e8e manylinux_2_28 \u955c\u50cf\u6784\u5efa\uff0c\u652f\u6301 CentOS 8\u3001Debian 10\u3001Ubuntu 18.10 \u53ca\u4ee5\u4e0a\u7684 OS \u7248\u672c\uff08\u5177\u4f53\u517c\u5bb9\u6027\u53ef\u67e5\u770b",(0,t.jsx)(n.a,{href:"https://github.com/mayeut/pep600_compliance?tab=readme-ov-file#distro-compatibility",children:"Distro compatibility"}),"\uff09\u3002\u5982\u9700\u8981\u5728\u66f4\u4f4e\u7248\u672c\u7684 OS \u4e0a\u8fd0\u884c\uff0c\u5efa\u8bae\u4f7f\u7528 Docker \u5bb9\u5668\u7684\u65b9\u5f0f\u6267\u884c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["Python 3.8\uff1a",(0,t.jsx)(n.a,{href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b2-cp38-cp38-manylinux_2_28_x86_64.whl",children:"lakesoul-1.0.0b2-cp38-cp38-manylinux_2_28_x86_644.whl"})]}),"\n",(0,t.jsxs)(n.p,{children:["Python 3.9\uff1a",(0,t.jsx)(n.a,{href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b2-cp39-cp39-manylinux_2_28_x86_64.whl",children:"lakesoul-1.0.0b2-cp39-cp39-manylinux_2_28_x86_64.whl"})]}),"\n",(0,t.jsxs)(n.p,{children:["Python 3.10\uff1a",(0,t.jsx)(n.a,{href:"https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b2-cp310-cp310-manylinux_2_28_x86_64.whl",children:"lakesoul-1.0.0b2-cp310-cp310-manylinux_2_28_x86_64.whl"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5047\u8bbe\u6211\u4eec\u4f7f\u7528Python 3.8\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u4e0b\u8f7dwheel\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"wget https://dmetasoul-bucket.obs.cn-southwest-2.myhuaweicloud.com/releases/lakesoul/python/v1.0/lakesoul-1.0.0b2-cp38-cp38-manylinux_2_28_x86_64.whl\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5-python-\u865a\u62df\u73af\u5883",children:"\u5b89\u88c5 python \u865a\u62df\u73af\u5883"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u63d0\u4f9b\u4e86\u591a\u4e2a Python \u8bfb\u53d6 LakeSoul \u8868\u7684\u793a\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b89\u88c5\u73af\u5883\u5e76\u4f53\u9a8c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# change python version if needed\nconda create -n lakesoul_test python=3.8\nconda activate lakesoul_test\ngit clone https://github.com/lakesoul-io/LakeSoul.git\ncd LakeSoul/python/examples\n# replace ${PWD} with your wheel file directory in requirements.txt\npip install -r requirements.txt\n"})}),"\n",(0,t.jsx)(n.h3,{id:"lakesoul-\u73af\u5883\u642d\u5efa",children:"LakeSoul \u73af\u5883\u642d\u5efa"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u65f6\u9700\u8981\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/zh-Hans/docs/Getting%20Started/setup-local-env",children:"LakeSoul \u5feb\u901f\u642d\u5efa\u8fd0\u884c\u73af\u5883"})," \u6587\u6863\u4e2d\u7684\u65b9\u6cd5\uff0c\u642d\u5efa LakeSoul \u73af\u5883\uff0c\u5e76\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"LAKESOUL_PG_URL"}),", ",(0,t.jsx)(n.code,{children:"LAKESOUL_PG_USERNAME"}),", ",(0,t.jsx)(n.code,{children:"LAKESOUL_PG_PASSWORD"})," \u8fd9\u51e0\u4e2a\u73af\u5883\u53d8\u91cf\u914d\u7f6e LakeSoul \u5143\u6570\u636e\u5e93\u7684\u8fde\u63a5\u4fe1\u606f\u3002\u5982\u679c\u662f\u6309\u7167\u6587\u6863\u4e2d\u4f7f\u7528 docker compose \u542f\u52a8\u7684\u672c\u5730\u6d4b\u8bd5\u73af\u5883\uff0c\u5219\u8fd9\u51e0\u4e2a\u73af\u5883\u53d8\u91cf\u7684\u914d\u7f6e\u4e3a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export LAKESOUL_PG_URL=jdbc:postgresql://localhost:5432/lakesoul_test?stringtype=unspecified\nexport LAKESOUL_PG_USERNAME=lakesoul_test\nexport LAKESOUL_PG_PASSWORD=lakesoul_test\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pytorch-\u4f7f\u7528\u8bf4\u660e",children:"PyTorch \u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"LakeSoul \u5b9e\u73b0 PyTorch/ HuggingFace \u63a5\u53e3\uff0c\u53ef\u4ee5\u76f4\u63a5\u5c06 LakeSoul \u8868\u7684\u6570\u636e\u8bfb\u53d6\u6210 HuggingFace \u7684 datasets."}),"\n",(0,t.jsx)(n.p,{children:"\u8bfb\u53d6\u8868\u7684 API\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import datasets\nimport lakesoul.huggingface\n\ndataset = datasets.IterableDataset.from_lakesoul(\"lakesoul_table\", partitions={'split': 'train'})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5373\u53ef\u521b\u5efa PyTorch/HuggingFace \u7684 dataset\uff0c\u8fdb\u884c\u8bad\u7ec3\u3002\u5206\u5e03\u5f0f\u8bad\u7ec3\u73af\u5883\u4f1a\u81ea\u52a8\u611f\u77e5\uff0c\u5728 dataset \u521d\u59cb\u5316\u65f6\u4e0d\u9700\u8981\u6dfb\u52a0\u989d\u5916\u53c2\u6570\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u7ed9\u51fa\u4ece LakeSoul \u4e2d\u5bfc\u51fa\u7ecf\u8fc7\u7279\u5f81\u8f6c\u6362\u7684 ",(0,t.jsx)(n.a,{href:"https://www.kaggle.com/competitions/titanic",children:"Titanic"})," \u6570\u636e\u96c6\uff0c\u7136\u540e\u7528 DNN \u6a21\u578b\u8fdb\u884c\u8bad\u7ec3\u548c\u9a8c\u8bc1\u7684\u793a\u4f8b\u4ee3\u7801\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import argparse\nimport pandas as pd\nimport numpy as np\nimport torch\nimport torch.nn as nn\nimport torch.nn.functional as F\nimport torch.nn.init as init\n\nimport datasets\nimport lakesoul.huggingface\n\nfrom torch.autograd import Variable\n\n# hyper parameters\nSEED = 0\ntorch.manual_seed(SEED)\ntorch.cuda.manual_seed(SEED)\nbatch_size = 50\nnum_epochs = 50\nlearning_rate = 0.01\nweight_decay = 0.005\n\n# label and feature columns\nlabel_column = 'label'\nfeature_columns = 'f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18,f19,f20,f21,f22,f23,f24,f25,f26'.split(\n    ',')\n\n\nclass Net(nn.Module):\n    def __init__(self):\n        super(Net, self).__init__()\n        self.bn = nn.BatchNorm1d(26)\n        self.fc1 = nn.Linear(26, 256, bias=True)\n        self.fc2 = nn.Linear(256, 2, bias=True)\n        self._initialize_weights()\n\n    def forward(self, x):\n        x = self.bn(x)\n        x = self.fc1(x)\n        x = F.relu(x)\n        x = self.fc2(x)\n        x = torch.sigmoid(x)\n        return x\n\n    def _initialize_weights(self):\n        for m in self.modules():\n            if isinstance(m, nn.Linear):\n                init.xavier_uniform_(m.weight)\n                if m.bias is not None:\n                    init.constant_(m.bias, 0)\n\n\ndef batchify(dataset, batch_size):\n    X_train = []\n    y_train = []\n    for i, item in enumerate(dataset):\n        feature_list = [item[feature] for feature in feature_columns]\n        X_train.append(feature_list)\n        y_train.append(int(item[label_column]))\n        if len(y_train) == batch_size:\n            yield X_train, y_train\n            X_train = []\n            y_train = []\n    # Handle the remaining records that don't fill up a full batch\n    if len(y_train) > 0:\n        yield X_train, y_train\n\n\ndef train_model(net, datasource, num_epochs, batch_size, learning_rate):\n    dataset = datasets.IterableDataset.from_lakesoul(datasource, partitions={'split': 'train'})\n\n    criterion = nn.CrossEntropyLoss()\n    optimizer = torch.optim.AdamW(net.parameters(), lr=learning_rate, weight_decay=weight_decay)\n\n    for epoch in range(num_epochs):\n        if epoch % 5 == 0:\n            print('Epoch {}'.format(epoch + 1))\n        for X_train, y_train in batchify(dataset, batch_size):\n            x_var = Variable(torch.FloatTensor(X_train))\n            y_var = Variable(torch.LongTensor(y_train))\n            optimizer.zero_grad()\n            ypred_var = net(x_var)\n            loss = criterion(ypred_var, y_var)\n            loss.backward()\n            optimizer.step()\n\n\ndef evaluate_model(net, datasource, batch_size):\n    dataset = datasets.IterableDataset.from_lakesoul(datasource, partitions={'split': 'val'})\n    num_samples = 0\n    num_correct = 0\n\n    for X_val, y_val in batchify(dataset, batch_size):\n        batch_size = len(y_val)\n        test_var = Variable(torch.FloatTensor(X_val))\n        with torch.no_grad():\n            result = net(test_var)\n        values, labels = torch.max(result, 1)\n        num_right = np.sum(labels.data.numpy() == y_val)\n        num_samples += batch_size\n        num_correct += num_right\n\n    accuracy = num_correct / num_samples\n    print('Accuracy {:.2f}'.format(accuracy))\n\n\ndef main(table):\n    net = Net()\n    train_model(net, table, batch_size, num_epochs, learning_rate)\n    evaluate_model(net, table, batch_size)\n\n\nif __name__ == '__main__':\n    parser = argparse.ArgumentParser()\n    parser.add_argument('--table', type=str, default='titanic_trans', help='lakesoul table name')\n    args = parser.parse_args()\n\n    main(args.table)\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u66f4\u591a\u7684\u793a\u4f8b\u53ef\u4ee5\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"https://github.com/lakesoul-io/LakeSoul/tree/main/python/examples",children:"LakeSoul/python/examples"})]}),"\n",(0,t.jsx)(n.h2,{id:"ray-\u8bfb\u53d6-lakesoul-\u8868",children:"Ray \u8bfb\u53d6 LakeSoul \u8868"}),"\n",(0,t.jsxs)(n.p,{children:["LakeSoul \u5b9e\u73b0\u4e86 Ray \u7684 ",(0,t.jsx)(n.a,{href:"https://docs.ray.io/en/latest/data/api/doc/ray.data.Datasource.html",children:"Datasource"}),"\u3002\u4ee5\u4e0b\u4e3a\u8c03\u7528\u4ee3\u7801\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import ray.data\nimport lakesoul.ray\n\nds = ray.data.read_lakesoul(\"table_name\", partitions={'split': 'train'})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pyarrowpandas-\u8bfb\u53d6-lakesoul-\u8868",children:"PyArrow/Pandas \u8bfb\u53d6 LakeSoul \u8868"}),"\n",(0,t.jsxs)(n.p,{children:["LakeSoul \u53ef\u4ee5\u652f\u6301\u5355\u673a\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u4f7f\u7528 PyArrow\u3001Pandas \u8fdb\u884c\u8ba1\u7b97\u3002LakeSoul \u8bfb\u53d6\u65f6\u8fd4\u56de PyArrow\n\u7684 ",(0,t.jsx)(n.a,{href:"https://arrow.apache.org/docs/python/generated/pyarrow.dataset.Dataset.html",children:"Dataset"})," \u5bf9\u8c61\uff0c\u652f\u6301\u8fed\u4ee3\u8bbf\u95ee\u3002\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from lakesoul.arrow import lakesoul_dataset\n\nds = lakesoul_dataset(\"table_name\", partitions={'split': 'train'})\n\n# iterate batches in dataset\n# this will not load entire table to memory\nfor batch in ds.to_batches():\n    ...\n\n# convert to pandas table\n# this will load entire table into memory\ndf = ds.to_table().to_pandas()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var t=a(7294);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);