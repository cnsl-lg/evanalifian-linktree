const evan = {
  name: 'Evan Alifian',
  about: 'A student at Vocational High School 2 Bangkalan and beginner web developer.',
  image: './assets/evan.jpg',
  socialMedia: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/evanalifian',
      icon: `<i class="icon ri-instagram-fill"></i>`
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/profile.php?id=100074264594248',
      icon: `<i class="icon ri-facebook-circle-fill"></i>`
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/alifian2005',
      icon: `<i class="icon ri-twitter-fill"></i>`
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@vandersn',
      icon: `<i class="icon ri-youtube-fill"></i>`
    },
    {
      name: 'GitHub',
      url: 'https://github.com/evanalifian',
      icon: `<i class="icon ri-github-fill"></i>`
    },
  ]
}

const container = document.getElementsByClassName('container')[0]
container.innerHTML = headerElement()
container.append(socialMedia())

function headerElement() {
  return `
    <!-- === Header === -->
    <header>
      <img src="${evan.image}" alt="" class="profile-image" width="100">
      <h2 class="username">${evan.name}</h2>
      <p class="about">${evan.about}</p>
    </header>
    <!-- === End of Header === -->
  `
}

function socialMedia() {
  const socialMedia = document.createElement('ul')
  socialMedia.setAttribute('class', 'social-media-list')
  const socialMediaList = `
    ${evan.socialMedia.map(social => `
      <li>
        <a href="${social.url}" target="_blank">
          ${social.icon} ${social.name}
        </a>
      </li>
    `).join('')}
  `

  socialMedia.innerHTML = socialMediaList
  return socialMedia
}