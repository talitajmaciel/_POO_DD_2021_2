public class Contact 
{
    private String name;
    private ArrayList<Fone> fones;

    public Contact(String name, ArrayList<Fone> fones){
        this.name = name;
        fones = new ArrayList<Fone>();
    }

    public void addFone(String label, String number){
        if(!Fone.validate(number)){
            System.out.println("Número inválido!");
            return;
        }

        fones.add(new Fone(label, number));
    }

    public String getName(){return this.name;}
    public ArrayList<Fone> getFones(){return this.fones;}

    public boolean rmFone(int index){
        if(index > fones.size() || index < 0){
            System.out.println("Índice Inválido!");
            return false;
        }
        fones.remove(fones.get(index));
        return true;
    }

    public String toString(){
        String aux = "- " + this.name + " ";
        
        for(int i = 0; i < fones.size(); i++){
            aux += "[" + i + ":" + fones.get(i) + "] "; 
        }
        return aux;
    }
}

public class Phone {
    
    private String id;
    private String number;

    public Phone(String id, String number){
        this.id = id;
        this.number = number;
    }

    public static boolean validate(String number){
        String validos = "0123456789()-";
        for(int i=0;i<number.length();i++){
            if(validos.indexOf(number.charAt(i)) == -1)
                return false;
        }
        return true;
    }

    public String getId() {
        return id;
    }

    public String getNumber() {
        return number;
    }

    @Override
    public String toString() {
        return id + ":" + number;
    }
}

public class Schedule {
    
    private ArrayList<Contact> contacts;

    public Schedule(){
        this.contacts = new ArrayList<>();
    }

    public boolean addContact(String name, ArrayList<Phone> phones){
        for(Contact contact : contacts){
            if(contact.getName().equals(name)){
                System.out.println("Nome ja cadastrado!");
                return false;
            }
        }
        this.contacts.add(new Contact(name, phones));
        Collections.sort(contacts);
        return true;
    }

    public boolean addPhone(String name, String id, String number){
        for(Contact contact : contacts){
            if(contact.getName().equals(name)){
                contact.addPhone(id, number);
                System.out.println("Telefone adicionado com sucesso!");
                return true;
            }
        }
        System.out.println("Nenhum contato encontrado!");
        return false;
    }

    public boolean rmContact(String name){
        for(Contact contact : contacts){
            contact.getName().equals(name);
            contacts.remove(contact);
            System.out.println("Contato removido com sucesso!");
            return true;
        }
        System.out.println("Nenhum contato encontrado!");
        return false;
    }


    public ArrayList<Contact> search(String expression){
        ArrayList<Contact> regex = new ArrayList<>();
        //expression += "\\w";

        Pattern pattern = Pattern.compile(expression);
        Matcher matcher;
        for(Contact contact : contacts){
            matcher = pattern.matcher(contact.toString());
            if(matcher.find()){
                regex.add(contact);
            }
        }
        return regex;
    }

    public boolean rmPhone(String name, int index){
        for(Contact contact : contacts){
            if(contact.getName().equals(name)){
                contact.rmvPhone(index);
                return true;
            }
        }
        System.out.println("Nenhum contato encontrado!");
        return false;
    }


    @Override
    public String toString() {
        String exit = "";

        for(Contact contact : contacts)
            exit += "- " + contact.toString() + "\n" ;

        return exit;
    }
}
public class Aplication {
    
    public static void main(String[] args) {
        
        Schedule schedule = new Schedule();
        Scanner sc = new Scanner(System.in);
        
        while(true){
            String line = sc.nextLine();
            String[] usrIn = line.split(" ");
            if(usrIn[0].equals("add")){
                boolean verification = true;
                ArrayList<Phone> phones = new ArrayList<Phone>();
                for(int i=2;i < usrIn.length;i++){
                    String phoneNumbers[] = usrIn[i].split(":");
                    phones.add(new Phone(phoneNumbers[0], phoneNumbers[1]));
                }
                verification = schedule.addContact(usrIn[1], phones);
                if(verification)
                    System.out.println("Contato salvo com sucesso!");
                else
                    System.out.println("Ocorreu um erro ao salvar ... Tente novamente!");
            }else if(usrIn[0].equals("show")){
                System.out.println(schedule);
            }else if(usrIn[0].equals("rmFone")){
                String name = usrIn[1];
                int index = Integer.parseInt(usrIn[2]);
                schedule.rmPhone(name, index);
            }else if(usrIn[0].equals("end")){
                break;
            }else if(usrIn[0].equals("search")){
                ArrayList<Contact> regex = new ArrayList<>();
                regex = schedule.search(usrIn[1]);
                System.out.println(regex);
            }else if(usrIn[0].equals("addPhone")){
                String name  = usrIn[1];
                String[] data = usrIn[2].split(":");
                schedule.addPhone(name, data[0], data[1]);
            }else{
                System.out.println("Comando invalido...");
            }
        }

        sc.close();
    }
}