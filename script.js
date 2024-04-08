document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    console.log('Lead Captured:', { name, email });
    
    // Aqui, você poderia adicionar uma chamada para uma API para enviar os dados do formulário
    // ou simplesmente exibir uma mensagem de sucesso.
    alert('Obrigado por se inscrever! Entraremos em contato em breve.');
    
    // Resetar o formulário após a submissão
    this.reset();
});

