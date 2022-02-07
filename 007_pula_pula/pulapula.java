class Kid{

    String name;
    int age;

    public Kid(String name, int age){
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return name
            + ":" 
            + age;
    }
}


public class Pulapula {
    
    ArrayList<Kid> kidsWaiting;
    ArrayList<Kid> kidsPlaying;

    public Pulapula(){
        this.kidsWaiting = new ArrayList<>();
        this.kidsPlaying =  new ArrayList<>();
    }

    public void arrive(Kid kid){
        kidsWaiting.add(0, kid);
    }

    public void enter(){
        if(kidsWaiting.isEmpty())
            return;
        Kid kidFirst = kidsWaiting.get(kidsWaiting.size() - 1);
        kidsWaiting.remove(kidsWaiting.size() - 1);
        kidsPlaying.add(0, kidFirst);
        return;
    }

    public void leave(){
        if(kidsPlaying.isEmpty())
            return;
        Kid kidFirst = kidsPlaying.get(kidsWaiting.size() - 1);
        kidsPlaying.remove(kidsPlaying.size() - 1);
        kidsWaiting.add(0, kidFirst);
        return;
    }

    @Override
    public String toString() {
        return "=>" + kidsWaiting + "=>" + kidsPlaying;
    }

    public static void main(String[] args) {
        Pulapula pp = new Pulapula();
        System.out.println(pp);
        pp.arrive(new Kid("Mario", 5));
        pp.arrive(new Kid("Livia", 4));
        pp.arrive(new Kid("Luana", 3));
        pp.arrive(new Kid("Pedro", 2));
        System.out.println(pp);
        pp.enter();
        pp.enter();
        System.out.println(pp);
        pp.leave();
        System.out.println(pp);
        pp.enter();
        System.out.println(pp);
        pp.leave();
        System.out.println(pp);
    }
}