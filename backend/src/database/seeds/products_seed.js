
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 2, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 3, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 4, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 5, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 6, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 7, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 8, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 9, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 11, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 12, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 13, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 14, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 15, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 16, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 17, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 18, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },        
        {
          id: 19, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 21, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 22, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 23, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 24, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 25, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 26, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 27, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 28, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },        
        {
          id: 29, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 31, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 32, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 33, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 34, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 35, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 36, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 37, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 38, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },        
        {
          id: 39, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 41, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 42, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 43, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 44, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 45, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 46, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 47, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 48, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },        
        {
          id: 49, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 51, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 52, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 53, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 54, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 55, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 56, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 57, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 58, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },        
        {
          id: 59, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 61, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 62, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 63, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 64, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 65, 
          description: 'Capa de Almofada Wool', 
          details: 'Wool', 
          valueFrom: '129', 
          valueTo: '99', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 66, 
          description: 'Jogo de Lençol Percal Daily + Manta Microflanelada Flannel One for All', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 67, 
          description: 'Kit Cama Studio Iris', 
          details: 'Solteiro Extra', 
          valueFrom: '428', 
          valueTo: '319', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
        {
          id: 68, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },        
        {
          id: 69, 
          description: 'Kit Edredom Studio Gardênia', 
          details: 'Queen / King', 
          valueFrom: '868', 
          valueTo: '695', 
          pictures: 'https://hd.mmartan.com.br/wp-content/uploads/2019/05/20190306/decoracao-esncadivana-dicas-quarto.png;https://hd.mmartan.com.br/wp-content/uploads/2018/06/19102216/como-acertar-sua-casa-com-almofadas-decorativas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/05/22194550/quarto-escandinavo-moveis-retos-decoracao-dicas.png;https://hd.mmartan.com.br/wp-content/uploads/2019/04/02134246/Cama-sem-cabeceira-quadros.jpg'
        },
      ]);
    });
};
