<a name="readme-top"></a>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Metrics ](#-metrics-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#live-demo)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)

# 📖 Hello rails react app <a name="about-project"></a>

**Hello rails react app** Implements a connection between a Ruby on Rails back-end and React front-end.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://guides.rubyonrails.org/index.html">Ruby on Rails</a></li>
    <li><a href="https://react.dev/">React</a></li>
  </ul>
</details>

<details>
  <summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/docs/">PostgreSQL</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Implements a connection between a Ruby on Rails back-end and React front-end**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- No live demo yet.

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Git SCM
- Ruby installed
- Rails installed
- PostgreSQL and SQL installed

And in case you want to run capybara tests:

- Chromedriver
- WSL activated
- Ubuntu or any other linux distro shell installed

### Setup

Clone this repository to your desired folder:

```
git clone https://github.com/jorgeabrahan/hello_rails_react.git
```

Or download the ZIP folder.

### Install

Once you've cloned the repository simply run:

```
bundle install
rails db:create
rails db:migrate
```

If it doesn't work because the server got disconnected you might need to change the credentials for your own psql credentials in the database.yml file.

### Usage

To run the project, if you are on the blog folder path on your terminal you can execute the following command:

```
rails server
```

### Run tests

To start tests run:

```
rspec spec # for rspec tests
rails test:system # for capybara tests
```

### Deployment

- Render

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Jorge Abrahan**

- GitHub: [@jorgeabrahan](https://github.com/jorgeabrahan)
- LinkedIn: [Jorge Abrahan](https://www.linkedin.com/in/jorge-siguenza/?locale=en_US)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Deploy application in Render**
- [ ] **Improve cyclomathic complexity in some methods**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project you can just cheer me up with a comment 🙂!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Original project idea by [Microverse](https://www.microverse.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

- **What is this project main purpose?**

  - To practice working with Ruby on Rails, React, PostgreSQL and interpret entity relationship diagrams, UML class diagrams and build UIs in ruby based on design guidelines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
