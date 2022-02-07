class Paciente {
    private nome: string;
    public doenca: string;
    private medicos: Map<string, Medico>;
    constructor(nome: string, doenca: string) {
        this.nome = nome;
        this.doenca = doenca;
        this.medicos = new Map<string, Medico>();
    }
    public getNome(): string {
        return this.nome;
    }
    public addMedico(medico: Medico): void {
        let chave = medico.getNome();
        if (this.medicos.has(chave))
            return;
        this.medicos.set(chave, medico);
        medico.addPaciente(this);
    }

    public removeMedico(key: string): void {
        let medico: undefined | Medico = this.medicos.get(key);
        if (medico !== undefined) {
            this.medicos.delete(key);
            medico.removePaciente(this.nome);
        }
    }

    public getMedicos(): string[] {
        return [...this.medicos.keys()];
    }

    public toString(): string {
        let keys = this.medicos.keys();
        return this.nome + " [" + [...keys].join(", ") + "]";
    }
}

class Medico { 
    private nome: string;
    public especialidade: string;
    private pacientes: Map<string, Paciente>;
    constructor(nome: string, especialidade: string) {
        this.nome = nome;
        this.especialidade = especialidade;
        this.pacientes = new Map<string, Paciente>();
    }
    public getNome(): string {
        return this.nome;
    }
    public addPaciente(paciente: Paciente): void {
        let chave = paciente.getNome();
        if (this.pacientes.has(chave))
            return;
        this.pacientes.set(chave, paciente);
        paciente.addMedico(this);
    }

    public removePaciente(key: string): void {
        let paciente: Paciente | undefined = this.pacientes.get(key);
        if (paciente !== undefined) {
            this.pacientes.delete(key);
            paciente.removeMedico(this.nome);
        }
    }

    public getPaciente(): string[] {
        return [...this.pacientes.keys()];
    }

    public toString(): string {
        let keys = this.pacientes.keys();
        return this.nome + " [" + [...keys].join(", ") + "]";
    }
}

class Hospital {
    private pacientes: Map<string, Paciente>;
    private medicos: Map<string, Medico>;
    constructor() {
        this.pacientes = new Map<string, Paciente>();
        this.medicos = new Map<string, Medico>();
    }
    public addPaciente(paciente: Paciente): void {
        let chave = paciente.getNome();
        if (this.pacientes.has(chave))
            return;
        this.pacientes.set(chave, paciente);
    }

    public addMedico(medico: Medico): void {
        let chave = medico.getNome();
        if (this.medicos.has(chave))
            return;
        this.medicos.set(chave, medico);
    }

    public getPaciente(nome: string): Paciente {
        let paciente: undefined | Paciente = this.pacientes.get(nome);
        if (paciente === undefined)
            throw new Error("Paciente nao encontrado");
        return paciente;
    }

    public getMedico(nome: string): Medico {
        let medico =  this.medicos.get(nome);
        if (medico === undefined)
            throw new Error("Medico nao encontrado");
        return medico;
    }

    public removerPaciente(nome: string): void {
        let paciente = this.getPaciente(nome);
        for (let medic of paciente.getMedicos()) {
            paciente.removeMedico(medic);
        }
        this.pacientes.delete(nome);
    }

    public removerMedico(nome: string): void {
        let medico = this.getMedico(nome);

        for (let paciente of medico.getPaciente()) {
            medico.removePaciente(paciente);
        }

        this.medicos.delete(nome);
    }

    public vincular(nome_paciente: string, nome_medico: string): void {
        let paciente = this.getPaciente(nome_paciente);
        let medic = this.getMedico(nome_medico);

        if(this.getMedico == null) {
    	return;
    }
     
    for(let medic : paciente.getMedicos()) {
        if(medic.getPaciente().keys(medic.getPaciente())) {
           console.log("Ja existe outro medico com essa especialidade");
           return;
     }
    }
    medic.addPaciente(paciente);
    paciente.addMedico(medic);
    }
   
    public desvincular(nome_paciente: string, nome_medico: string): void {
        this.getPaciente(nome_paciente).removeMedico(nome_medico);
    }

    public toString(): string {
        let pacientes = [...this.pacientes.values()].map(a => a.toString());
        let medicos= [...this.medicos.values()].map(d => d.toString());
        return "--Pacientes:\n" + pacientes.join("\n") + "\n--Medicos:\n" + medicos.join("\n");
    }
}

public class Main {

	public static main(string: void): void{
		let hospital = new Hospital();

        hospital.addPaciente(new Paciente("fred", "fratura"));
        hospital.addPaciente(new Paciente("alvis", "avc"));
        hospital.addPaciente(new Paciente("goku", "hemorragia"));
        hospital.addPaciente(new Paciente("silva", "sinusite"));
        
        hospital.addMedico(new Medico("bisturi", "cirurgia"));
        hospital.addMedico(new Medico("snif", "alergologia"));
        hospital.addMedico(new Medico("facada", "cirurgia"));
        console.log(Hospital);  

        hospital.vincular("bisturi","fred");
        hospital.vincular("bisturi","alvis");
        hospital.vincular("bisturi","goku");
        hospital.vincular("snif","silva");
        hospital.vincular("snif","alvis");
        hospital.vincular("facada","goku");
        console.log(Hospital); 
	}
}
