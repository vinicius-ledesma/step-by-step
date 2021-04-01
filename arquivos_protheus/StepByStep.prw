#include "totvs.ch"

//------------------------------------------------------------------
/*/{Protheus.doc} StepByStep

Exemplo de rotina que executa um app Angular

@author  Vinicius Ledesma
@since   01/04/2021
@version 1.0
/*/
//-------------------------------------------------------------------
Function StepByStep()
    FwCallApp("step-by-step")
Return

//------------------------------------------------------------------
/*/{Protheus.doc} JsToAdvpl

Bloco de codigo que recebera as chamadas JavaScript

@author  Vinicius Ledesma
@since   01/04/2021
@version 1.0
/*/
//-------------------------------------------------------------------
Static Function JsToAdvpl(oWebChannel,cType,cContent)

    Do Case
        Case cType == "getWelcomeMessage"
            oWebChannel:AdvPLToJS('setWelcomeMessage', "Seja bem vindo(a) " + cUserName + "! Hoje é " + cValToChar(dDatabase) + ", " + DiaSemana(dDatabase) + ".")
        Case cType == "doSomething"
            Conout(cContent)
        Case cType == "callMe"
            oWebChannel:AdvPLToJS('jsLog','someResponse')

    EndCase

Return
