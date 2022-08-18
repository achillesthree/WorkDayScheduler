<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Work Day Scheduler</title>
  </head>

  <body>
    <header class="jumbotron">
      <h1 class="display-3">Work Day Scheduler</h1>
      <p class="lead">A simple calendar app for scheduling your work day</p>
      <p id="currentDay" class="lead"></p>
    </header>
    <!-- <div class="container">
      <div class="row time-block" id="9">
        <div class="col-2 hour">9am</div>
        <textarea class="col-8 description"></textarea>
        <button class="col-2 saveBtn">SAVE</button>
    </div>
    <div class="container">
      <div class="row time-block" id="10">
        <div class="col-2 hour">10am</div>
        <textarea class="col-8 description"></textarea>
        <button class="col-2 saveBtn">SAVE</button>
      </div>
    <div class="container">
      <div class="row time-block" id="11">
        <div class="col-2 hour">11am</div>
        <textarea class="col-8 description"></textarea>
        <button class="col-2 saveBtn">SAVE</button>
      </div>
          <div class="container">
            <div class="row time-block" id="12">
              <div class="col-2 hour">12pm</div>
              <textarea class="col-8 description"></textarea>
              <button class="col-2 saveBtn">SAVE</button>
            </div>
            <div class="container">
              <div class="row time-block" id="13">
                <div class="col-2 hour">13:00</div>
                <textarea class="col-8 description"></textarea>
                <button class="col-2 saveBtn">SAVE</button>
              </div>
              <div class="container">
                <div class="row time-block" id="14">
                  <div class="col-2 hour">14:00</div>
                  <textarea class="col-8 description"></textarea>
                  <button class="col-2 saveBtn">SAVE</button>
                </div>
                <div class="container">
                  <div class="row time-block" id="15">
                    <div class="col-2 hour">15:00</div>
                    <textarea class="col-8 description"></textarea>
                    <button class="col-2 saveBtn">SAVE</button>
                  </div>
                  <div class="container">
                    <div class="row time-block" id="16">
                      <div class="col-2 hour">16:00</div>
                      <textarea class="col-8 description"></textarea>
                      <button class="col-2 saveBtn">SAVE</button>
                    </div>
                    <div class="container">
                      <div class="row time-block" id="17">
                        <div class="col-2 hour">17:00</div>
                        <textarea class="col-8 description"></textarea>
                        <button class="col-2 saveBtn">SAVE</button>
                      </div> -->

                      
                        <div class="container-fluid">
                          <table class="table table-borderless"
                       
                        
                        <table class="table table-borderless">
                          <tbody>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">7:00am</td>
                              <td class="col-9 p-0"><textarea id="7a" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="7ab">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">8:00am</td>
                              <td class="col-9 p-0"><textarea id="8a" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="8ab">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">9:00am</td>
                              <td class="col-9 p-0"><textarea id="9a" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="9ab">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">10:00am</td>
                              <td class="col-9 p-0"><textarea id="10a" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="10ab">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">11:00am</td>
                              <td class="col-9 p-0"><textarea id="11a" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="11ab">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">12:00pm</td>
                              <td class="col-9 p-0"><textarea id="12p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="12pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">1:00pm</td>
                              <td class="col-9 p-0"><textarea id="1p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="1pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">2:00pm</td>
                              <td class="col-9 p-0"><textarea id="2p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="2pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">3:00pm</td>
                              <td class="col-9 p-0"><textarea id="3p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="3pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">4:00pm</td>
                              <td class="col-9 p-0"><textarea id="4p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="4pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">5:00pm</td>
                              <td class="col-9 p-0"><textarea id="5p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="5pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">6:00pm</td>
                              <td class="col-9 p-0"><textarea id="6p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="6pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">7:00pm</td>
                              <td class="col-9 p-0"><textarea id="7p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="7pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">8:00pm</td>
                              <td class="col-9 p-0"><textarea id="8p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="8pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">9:00pm</td>
                              <td class="col-9 p-0"><textarea id="9p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="9pb">SAVE</button></td>
                            </tr>
                            <tr class="border-bottom border-white">
                              <td class="col-1 border-right border-top border-dark text-center p-5">10:00pm</td>
                              <td class="col-9 p-0"><textarea id="10p" class="text-body border-right border-dark col-12" type="text"></textarea></td>
                              <td class="col-2 p-0"><button class="saveBtn text-right p-5 border-0" id="10pb">SAVE</button></td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                      </div>
                    
  
<!-- Moment -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
