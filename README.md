# Projeto - Envio de Atestado

Como atividade proposta na **Trilha de ServiceNow Estagiários EDX** foi um prática de **Envio de Atestado Médicos** utilizando a plataforma do *ServiceNow*.

## 📃 Tabelas

- Atestados (Medical Certificate extends Task)
- Supervisor (Supervisor extends User)
- Colaborador (Employee extends User)

## Adicionais

- Cálculo automático de idade de acordo com a Data de Nascimento
- Ask for Approval do Supervisor
- User ID automático

## 💻 Record Producer

- Envio de Atestado (para tabela Atestados)

![RecordProducer](img/record.png)

## Form - Atestados
![Atestados](img/atestados.png)

## Form - Supervisor
![Supervisor](img/supervisor.png)

## Form - Colaborador
![Colaborador](img/colaborador.png)

## 🎲 Modelo Lógico
![Modelo Lógico](img/modelologico.png)

Sistema utilizado: *BrModelo*

## 🆔 UserID Automático
```bash
(function executeRule(current, previous /*null when async*/) {

	current.user_name = current.email.split("@")[0];

})(current, previous);
```

Linguagem utilizada: *JavaScript*

## ➕ Cálculo automático de idade de acordo com a Data de Nascimento

```bash
(function executeRule(current, previous /*null when async*/) {
		
		var birth = new GlideDate();
		birth.setValue(current.date_of_birth);

        var today = new GlideDate();
        var age = parseInt(today.getByFormat('yyyy'), 10) - parseInt(birth.getByFormat('yyyy'), 10);

       var tMd = today.getByFormat('MMdd');
        var bMd = birth.getByFormat('MMdd');

        if (tMd < bMd){
            age--;
        }

        current.age = age;

})(current, previous);
```

Linguagem utilizada: *JavaScript*

## ✅ Ask for Approval do Supervisor
![Ask for Approval](img/flowdesigner.png)

Sistema utilizado: *ServiceNow - Flow Designer*