---
date: 2020-11-12
author: Muhammad Saad
location: Pakistan
---

# ⚡️ Technologies

For bringing Shortify to life, we have used following tech:

- React.js for frontend development
- Flask for backend development
- BERT Model for Natural Language Processing (NLP)

## React.js

React.js is a JavaScript **frontend** library developed by the folks at Facebook Inc. For writing the code, we made use of the following React.js practices:

- Controlled Components for state management
- Functional Components (Recommended by Facebook)
- React.js hooks for making API requests and dealing with the state

## Flask

We chose to work with Flask because of the **NLP model** we used was written in python. The overall architecture is as simple as it gets. To make the clientside and backend talk, we wrote a route that was taking the content or the URL from the frontend and then sending the summarize content as response.

## BERT Model

In this project we're using an NLP model (BERT). This model utilizes the HuggingFace Pytorch transformers library to run extractive summarizations. This works by first embedding the sentences, then running a clustering algorithm, finding the sentences that are closest to the cluster's centroids. This library also uses coreference techniques, utilizing the [Neural Coref](https://github.com/huggingface/neuralcoref) library to resolve words in summaries that need more context.
