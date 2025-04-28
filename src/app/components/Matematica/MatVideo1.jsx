'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo1() {
    return (
        <div className='max-w-7xl mx-auto py-12'>
          <div className=" p-4 ">
            <div className="attention-box mb-8 mx-8 text-slate-800 text-center text-lg border-2 border-primary rounded-lg p-8">
                <h1 className="text-4xl font-semibold text-slate-700 mb-4">Atividades Extras</h1>
                  <p>
                      Acesse as <a href="https://exerciciosextras1a.beieducacaopedagogico.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800"> atividades extras</a>{' '}que vão além do conteúdo presente nos livros físicos. Aqui você poderá acessar e baixar PDFs com atividades para cada capítulo, dando um passo além no ensino de habilidades matemáticas.
                  </p>
                  
                </div>

    
            <div className="p-4 flex flex-col md:flex-row items-center">
            
              <div className="w-full pr-4">
                <div className=" mb-4">
                    <h1 className="text-4xl font-bold text-slate-700">Juros simples e compostos</h1>
                </div>
                <h1 className=" text-slate-700">Para essa quarta etapa trouxemos o professor Sandro Curió com um resumo sobre juros simples e compostos através da resolução de alguns problemas para melhor compreensão dos estudantes.</h1>
              </div>
              
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo1