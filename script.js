async function submitLoginForm(event) {
    event.preventDefault();

    try {
        // Obtendo os valores dos campos de email e senha
        const email = document.getElementById("username").value;
        const senha = document.getElementById("password").value;

        // Verifica se os campos foram preenchidos
        if (!email || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Fazendo a requisição para o backend
        const response = await api.post('/login', {
            email,
            senha
        });

        console.log(response);

        // Verifica se a resposta foi bem-sucedida (código de status 200)
        if (response.status === 200) {
            // Redireciona para a tela da lista de recados
            window.location.href = "lista_recados.html";
        } else {
            // Mostra uma mensagem de erro caso as credenciais sejam inválidas
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    } catch (error) {
        console.log(`Erro durante a requisição: ${error.message}`);
    }
}


// Função para criar mensagem
const createMessage = async (event) => {
    event.preventDefault();

    try {
        // Obtemos os valores dos campos do formulário
        const email = document.getElementById("createEmail").value;
        const title = document.getElementById("createTitle").value;
        const description = document.getElementById("createDescription").value;

        // Armazenamos os dados em um objeto para a requisição
        const data = {
            email,
            title,
            description
        };

        // Fazemos a requisição para criar a mensagem
        const response = await api.post('messages', data);

        console.log(`A requisição foi bem sucedida: ${response.data}`);

        // Limpar o formulário após o envio bem sucedido
        document.getElementById("createMessageForm").reset();

    } catch (error) {
        console.log(`Erro durante a requisição: ${error.message}`);
    }
}

// Função para obter mensagens
const getMessages = async (event) => {
    event.preventDefault();

    try {
        // Obtemos o email digitado pelo usuário
        const email = document.getElementById('emailInput').value;

        // Fazemos a requisição para obter as mensagens desse email
        const response = await api.get(`messages/${email}`);

        console.log('Resposta da requisição:', response.data);

        // Lógica para manipular as mensagens recebidas
    } catch (error) {
        console.log(`Erro durante a requisição: ${error.message}`);
    }
}

// Função para atualizar mensagem
const updateMessage = async (event) => {
    event.preventDefault();

    try {
        // Lógica para atualizar uma mensagem
    } catch (error) {
        console.log(`Erro durante a requisição: ${error.message}`);
    }
}

// Função para deletar mensagem
const deleteMessage = async (event) => {
    event.preventDefault();

    try {
        // Lógica para deletar uma mensagem
    } catch (error) {
        console.log(`Erro durante a requisição: ${error.message}`);
    }
}
