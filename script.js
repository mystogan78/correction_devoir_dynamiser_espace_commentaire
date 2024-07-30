document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('comment-form');
    const errorMessage = document.getElementById('error-message');
    const commentList = document.getElementById('comment-list');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le formulaire de se soumettre normalement
      
      const firstName = document.getElementById('first-name').value.trim();
      const lastName = document.getElementById('last-name').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!firstName || !lastName || !message) {
        // Afficher le message d'erreur si des champs sont vides
        errorMessage.style.display = 'block';
      } else {
        // Masquer le message d'erreur et ajouter le commentaire si tous les champs sont remplis
        errorMessage.style.display = 'none';
        
        // Créer un nouvel élément pour le commentaire
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
        commentDiv.innerHTML = `
          <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
              <p>${message}</p>
            </div>
          </div>
        `;
        
        // Ajouter le commentaire à la liste
        commentList.appendChild(commentDiv);
        
        // Réinitialiser le formulaire
        form.reset();
      }
    });
  });
  