  new Vue({
    el: '#app',
    data: {
      isApplied: null,
      grade1: 0,
      grade2: 0,
      grade3: 0,
      additionalGrade: 0,
      total: 0,
      resultMessage: '',
      total2: 0,
      isMobileMenuOpen: false,
    },
    computed: {
      progress() {
        if (this.total >= 30 && this.total < 70){
          return this.total2;
        }
        else{
          return this.total;
        }
      }
    },
    methods: {
      calculateTotal() {
        if (this.isApplied === 'yes') {
          this.total = this.grade1 * 4 + this.grade2 * 2 + this.grade3 * 4;
          this.total2 = this.total;
          if (this.total >= 30 && this.total < 70) {
              if (this.grade1 < this.grade2 && this.additionalGrade > this.grade1){
                  this.total2 = this.additionalGrade * 4 + this.grade2 * 2 + this.grade3 * 4
              }
              else{
                  if (this.additionalGrade > this.grade2){
                      this.total2 = this.grade1 * 4 + this.additionalGrade * 2 + this.grade3 * 4
                  }
              }
          }
        } else {
          this.total = this.grade1 * 4 + this.grade2 * 4 + this.grade3 * 2;
          this.total2 = this.total;
          if (this.total >= 30 && this.total < 70){
              if (this.grade1 < this.grade2 && this.additionalGrade > this.grade1){
                  this.total2 = this.additionalGrade * 4 + this.grade2 * 4 + this.grade3 * 2
              }
              else{
                  if (this.additionalGrade > this.grade2){
                    this.total2 = this.grade1 * 4 + this.additionalGrade * 4 + this.grade3 * 2
                  }
              }
          }
        }
        
      this.updateResultMessage();
      },
      updateResultMessage() {
        let aprovado = 70;
        let resultado = aprovado - this.total2;
        this.resultMessage = resultado <= 0 ? 'APROVADO' : 'Faltam ' + resultado.toString() + ' pontos para passar';
      }
    },
    watch: {
      total: 'updateResultMessage'
    }
  });