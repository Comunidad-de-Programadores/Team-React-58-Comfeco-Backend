
const getList = async (request, response) => {
  // await two seconds
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const groupsList = [
    {
      name: 'Desarrollo frontEnd',
      tag: 'javascript',
      description: 'Todo lo que necesitas saber sobre desarrollo frontEnd',
      image: 'https://www.qualitydevs.com/wp-content/uploads/2018/12/desarrollador-frontend.jpg'
    },
    {
      name: 'ElectronJs',
      tag: 'javascript',
      description: 'Desarrollo de aplicaciones multiplataforma con ElectronJs',
      image: 'https://elvento.com/wp-content/uploads/2020/01/electron-development.png'
    },
    {
      name: 'Webpack',
      tag: 'javascript',
      description: 'Grupo de ayuda, dudas, tutoriales, todo sobre webpack',
      image: 'http://static1.squarespace.com/static/5af4ad515cfd79b209ac7864/5c4063338a4134f6af98f020/5f7b64ccc0d1d43ac92e88a8/1603139157815/Cover-Image-Top-3-Webpack-Tips_3x5.png?format=1500w'
    },
    {
      name: 'ReactJs',
      tag: 'javascript',
      description: 'grupo para la mejor libreria para desarrollo de interfaces de usuario ReactJs',
      image: 'https://miro.medium.com/max/3840/0*oZLL-N4dGNlBe4Oh.png'
    },
    {
      name: 'Machine Learning',
      tag: 'phyton',
      description: 'Aquí para compartir charlas, tutoriales, cursos, libros, trabajos ... relacionados con Machine Learning',
      image: 'https://blog.bismart.com/hubfs/20190903-MachineLearning.jpg'
    },
    {
      name: 'Redes Neuronales',
      tag: 'phyton',
      description: 'Todo sobre redes neuronales e inteligencia artificial',
      image: 'https://www.iartificial.net/wp-content/uploads/2019/02/IA.jpg'
    },
    {
      name: 'Python en español',
      tag: 'phyton',
      description: 'Bienvenidos sean todos a este grupo donde se ayudará en especial a los que van iniciando en la programación con python.',
      image: 'https://i.blogs.es/62f583/python/450_1000.jpg'
    },
    {
      name: 'Ciencia de Datos con Python',
      tag: 'phyton',
      description: 'La finalidad del grupo es compartir información, conocimientos y experiencias respecto a la “Ciencia de Datos (también el fundamento teórico) con Python',
      image: 'https://i0.wp.com/blog.auriboxtraining.com/wp-content/uploads/2017/03/code-1084923_1280.png?resize=823%2C400&ssl=1'
    },
    {
      name: 'Desarrolladores web',
      tag: 'html',
      description: 'Grupo para los amantes del desarrollo web',
      image: 'https://tactic-center.com/wp-content/uploads/2017/08/10-complementos-de-Firefox-esenciales-para-desarrolladores-web.jpg'
    },
    {
      name: 'Laravel en español',
      tag: 'php',
      description: 'Todo sobre laravel, dudas, utoriales, guias y mas...',
      image: 'https://diegovolpe.com/wp-content/uploads/2020/07/laravel-covercover-1140x640-1.jpg'
    },
    {
      name: 'Trucazos PHP',
      tag: 'php',
      description: 'Grupo de Desarrollo PHP donde compartimos recursos, scripts, consejos y trucazos sobre programación.',
      image: 'https://blog.tednologia.com/wp-content/uploads/2020/03/php-2.png'
    },
    {
      name: 'Progressive web applications',
      tag: 'javascript',
      description: 'Grupo de ayuda sobre progressive web applications',
      image: 'https://programandoweb.net/wp-content/uploads/2020/04/PWA-Progressive-Web-Applications-1600x800.jpg'
    }
  ]

  response.success({ groups: groupsList })
}

export default getList
