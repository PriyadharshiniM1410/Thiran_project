fetch('students.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('org-name').innerText = data.organization.name;
    document.getElementById('org-mission').innerText = data.organization.mission;
    document.getElementById('partner-link').href = data.organization.partner_link;


    const container = document.getElementById('students-container');
    for( let i=0;i<data.featured_students.length;i++){
      const student=data.featured_students[i];
      const div=document.createElement('div');
      div.className='student-card';
      div.innerHTML=`
        <img src="${student.image}" width="100%">
        <h2>${student.name}</h2>
        <p>${student.title}</p>
        <p>"${student.description}"</p>
        <a href="${student.profile_link}">View Full Profile</a>
      `;
      container.appendChild(div);
    };
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
