// Debounce Function
  function debounce(cb, time) {
    let debounceTimeoutId;

    return function (...args) {
      clearTimeout(debounceTimeoutId);
      debounceTimeoutId = setTimeout(() => cb.apply(this, args), time);
    };
  }

  let calcUtils = {
    formatter: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    }),
    incrementValue: function (val) {
      val = val.replace(/\D/g, "");
      val = parseInt(val);
      val = val + 1000000;
      val = this.formatter.format(val);
      return val;
    },
    decrementValue: function (val) {
      val = val.replace(/\D/g, "");
      val = parseInt(val);
      val = val - 1000000;
      if (val <= 0) {
        return 0;
      } else {
        return this.formatter.format(val);
      }
    },
    translateNumber: function ($val, divider) {
      $val = $val.val().replace(/\,/g, "");
      let percentage = ($val / divider) * 100;
      return Math.round(percentage);
    },
    getValues: function (arr) {
      let values = jQuery.map(arr, function (field) {
        return $(field).val();
      });
      return values;
    },
    createGraph: function (formFields, divider) {
      var ctx = document
        .getElementById(formFields.graphTarget)
        .getContext("2d");
      let dataValues = this.getValues(formFields.graphFields);

      if (divider) {
        dataValues = $.map(formFields.graphFields, function (field) {
          return calcUtils.translateNumber(field, divider);
        });
      }
      var chartData = {
        datasets: [
          {
            data: dataValues,
            backgroundColor: formFields.graphColors,
          },
        ],
        labels: formFields.graphLabels,
      };
      let options = {
        legend: {
          display: false,
        },
        legendCallback: function (chart) {
          let dataArr = chart.data.datasets[0];
          let labelArr = chart.data.labels;
          var text = [];
          text.push("<ul class='graph-legend__ul'>");
          for (var i = 0; i < dataArr.data.length; i++) {
            text.push("<li class='graph-legend__li'>");
            text.push(
              '<span class="graph-legend__swatch" style="background-color:' +
                dataArr.backgroundColor[i] +
                '"></span><span class="graph-legend__label">' +
                labelArr[i] +
                "<span class='graph-legend__num'>" +
                dataArr.data[i] +
                "</span></span>"
            );
            text.push("</li>");
          }
          text.push("</ul>");
          return text.join("");
        },
      };
      let myDoughnutChart = new Chart(ctx, {
        type: "doughnut",
        data: chartData,
        options: options,
      });

      document.getElementById(
        "chartLegend"
      ).innerHTML = myDoughnutChart.generateLegend();
      $("#graphTotal").text(formFields.totalValue.val());

      return myDoughnutChart;
    },
  };


  if ($(".block--cpq-calc").length) {
      $(document).on("keypress", ".gform_wrapper", function (e) {
    let code = e.keyCode || e.which;
    if (code == 38 && !$(e.target).is('textarea,input[type="submit"]')) {
      e.preventDefault();
      return false;
    }
  });
    $(".block--cpq-calc").each(function () {
      let formID = $(this).find('.gform_anchor').attr('id').split('_').pop();
      
      let formFields = {
        formID: formID,
        graphTarget: "myChart",
        totalValue: $(`#input_${formID}_28`),
        graphFields: [
          $(`#input_${formID}_33`), 
          $(`#input_${formID}_34`),
          $(`#input_${formID}_35`),
          $(`#input_${formID}_36`),
        ],
        graphColors: ["#116fbb", "#736ac7", "#f0bd4d", "#c94a65"],
        graphLabels: [
          "Sales Effectiveness, Quoting Capacity",
          "Go-to-Market Effectiveness",
          "Pricing Discipline, Margin Management",
          "Back Office and Supply Chain Efficiency",
        ],
      };

      let myDoughnutChart = calcUtils.createGraph(formFields, false);

      function updateGraph() {
        totalValHigh = formFields.totalValue.val();
        let newValues = calcUtils.getValues(formFields.graphFields);
        myDoughnutChart.data.datasets[0].data = newValues;
        myDoughnutChart.update();
        $("#graphTotal").text(totalValHigh);
        document.getElementById(
          "chartLegend"
        ).innerHTML = myDoughnutChart.generateLegend();
      }
      gform.addAction("gform_input_change", debounce(updateGraph, 50), 10, 3);
    });
  }


  $("input").on("keyup", function (e) {
    var code = e.keyCode || e.which;
    if (code == 38 && $(e.target).is('input[type="text"]')) {
      let $target = $(e.target);
      let $value = calcUtils.incrementValue($(e.target).val());
      $target.val($value).change();
    }
    if (code == 40 && $(e.target).is('input[type="text"]')) {
      let $target = $(e.target);
      let $value = calcUtils.decrementValue($(e.target).val());
      $target.val($value).change();
    }
  });



  $("#showDownloadForm").on("click", function () {
    $(".gform_body > .gform_fields").slideUp("slow");
    $("#formContact").slideDown("slow");
    $(".gform_footer").show();
  });
