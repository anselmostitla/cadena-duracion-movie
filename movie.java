class Systems {
   public static void main (String[] args){
      Cinema cinema = new Cinema();

      int n = cinema.movie(500, 15, 0.9);
      System.out.println(n);

      n = cinema.movie(100, 10, 0.95);
      System.out.println(n);
   }
}

class Cinema {

   public int movie(int card, double ticket, double perc){
      double costSystemA = 0;
      double costSystemB = card;

      Integer n = 0;
      while (costSystemB > costSystemA) {
         n += 1;
         costSystemA += ticket;
         costSystemB += ticket*Math.pow(perc,n);
      }

      return n;
   }

}