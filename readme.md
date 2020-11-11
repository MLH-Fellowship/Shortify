<div align="center">
	<img src="https://i.imgur.com/DswCtOh.png" alt="shortify">
</div>

> Get an article gist under 1 mins

## 📃 Table of Content

- [Introduction](#️-introduction)
- [Features](#-features)
- [Demo](#-demo)
- [Motivation](#-motivation)
- [Technologies](#-technologies)
	- [React.js](#-reactjs)
	- [Flask](#-flask)
	- [BERT Model](#-bert-model)
- [Contributors](#-contributors)
- [License](#-license)

## ⚡️ Introduction

Shortify is a web application that is designed with a key point in mind i.e., to save user's time. It uses a Natural Language Processing (NLP) technique called BERT summarization extraction to provide the user a gist/summary of any article whatsover. The clientside of the application uses React.js whereas the backend is designed in Flask, a python framework.

## 🎯 Features

At the moment, Shortify provides following features to its users

- Percentage of text option that allows the user to control how much of the original text they want in the summary.
- User can paste any article inside the application.
- Instead of copy-pasting an article, the user can also paste the article's URL.

## 🚀 Demo

![Demo of Shortify](./images/demo.gif)

## 🙌 Motivation

There are a couple of reasons why we decided to build this web application. One of them is to save the readers time. Students who just want to go through a chapter can paste the entire chapter in this application and can get an overview. People who don't have time to read the entire article because of their busy schedule can use this application to get a gist of what they are reading.

## 👨🏻‍💻 Technologies

We made use of the following technologies for this project.

### 🌐 React.js

As mentioned earlier, the clientside of the application is using React.js. It is a JavaScript frontend library developed by the folks at Facebook Inc. For writing the code, we made use of the following React.js practices:

- Controlled Components for state management
- Functional Components (Recommended by Facebook)
- React.js hooks for making API requests and dealing with the state

### 💥 Flask

We chose to work with Flask because of the NLP model we used was written in python. The overall architecture is as simple as it gets. To make the clientside and backend talk, we wrote a route that was taking the content or the URL from the frontend and then sending the summarize content as response.

### 📦 BERT Model

In this project we're using an NLP model (BERT). This model utilizes the HuggingFace Pytorch transformers library to run extractive summarizations. This works by first embedding the sentences, then running a clustering algorithm, finding the sentences that are closest to the cluster's centroids. This library also uses coreference techniques, utilizing the [Neural Coref](https://github.com/huggingface/neuralcoref) library to resolve words in summaries that need more context.

## 💻 Contributors

This project is designed and developed by following folks:

- [Saad Irfan](https://github.com/msaaddev)
- [Anna Tselikova](https://github.com/aniats)
- [Aneesh Kodali](https://github.com/aneeshkodali)

## 🔑 License

- MIT
