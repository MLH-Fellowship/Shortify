# 🖥  Summarizer Backend

## 📰 ML Part

In our project we're using an NLP model (BERT). 
This model utilizes the HuggingFace Pytorch transformers library to run extractive summarizations. This works by first embedding the sentences, then running a clustering algorithm, finding the sentences that are closest to the cluster's centroids. This library also uses coreference techniques, utilizing the https://github.com/huggingface/neuralcoref library to resolve words in summaries that need more context.

## 🚀 DEVELOPMENT STEPS FOR ML PART

Just follow the steps below to set up the development enviroment for the frontend.

1. Clone this repository by running the following command inside your terminal:

```sh
git clone https://github.com/MLH-Fellowship/Summarizer.git
```

2. Install all packages and dependencies:

```sh
pip install -r requirements.txt
```


`Note:` The model will be automatically loaded at the first launch of the application.
