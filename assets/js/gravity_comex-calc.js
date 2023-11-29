$(document).ready(function () {
  if ($(".block--comex-survey").length) {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        let lpSt = ScrollTrigger.create({
          pin: ".form-headline__inner",
          start: "top 10%",
          endTrigger: "#stop",
          pinSpacing: false,
          end: "top bottom",
        });
      },
    });
    gform.addAction( 'gform_input_change', function( elem, formId, fieldId ) {
      if( ! window.gf_form_conditional_logic ) {
        return;
      }
      if(fieldId == 43) {
        if($(elem).val() < 1.5) {
          $(".form-result__inner").addClass("is-stage-1");
          $(".form-result__inner").attr("data-active-field", "#field_9_53");
        } else {
          $(".form-result__inner").removeClass("is-stage-1");
        }
        if($(elem).val() > 1.5 && $(elem).val() < 2.51 ) {
          $(".form-result__inner").addClass("is-stage-2");
          $(".form-result__inner").attr("data-active-field", "#field_9_54");
        } else {
          $(".form-result__inner").removeClass("is-stage-2");
        }
        if($(elem).val() > 2.5 && $(elem).val() < 3.51 ) {
          $(".form-result__inner").addClass("is-stage-3");
          $(".form-result__inner").attr("data-active-field", "#field_9_55");
        } else {
          $(".form-result__inner").removeClass("is-stage-3");
        }
        if($(elem).val() > 3.5 ) {
          $(".form-result__inner").addClass("is-stage-4");
          $(".form-result__inner").attr("data-active-field", "#field_9_56");
        } else {
          $(".form-result__inner").removeClass("is-stage-4");
        }
      }
    }, 10 );
    $(document).on(
      "gform_page_loaded",
      function (event, form_id, current_page) {
        ScrollTrigger.refresh();
        if (current_page == 8) {
          $(".form-intro__inner").hide();
          $('.form-result__inner').show();
          $($(".form-result__inner").attr("data-active-field")).children().clone().appendTo('.form-results__footer');
          ScrollTrigger.refresh();
        } else {
          $(".form-intro__inner").show();
          $('.form-result__inner').hide();
          $('.form-results__footer').empty();
          ScrollTrigger.refresh();
        }
        // Assign values from Gravity form to Marketo Form for main Comex Survey (Before Submit)
        if (current_page == 8) {
          let fieldPairs = [
          {
            label: "Which Industry best represents your organization?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_3",
            marketoForm: "#cEMAWhichIndustrybestrepresentsyourorganization",
          },
          {
            label:
            "What is the approximate size of your organization in terms of revenue?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_4",
            marketoForm:
            "#cEMAWhatistheapproximatesizeofyourorganizationintermsofrevenue",
          },
          {
            label:
            "What does your customer or account information / data look like?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_6",
            marketoForm:
            "#cEMAWhatdoesyourcustomeroraccountinformationdatalooklike",
          },
          {
            label: "Do you group customers for commercial purposes?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_7",
            marketoForm: "#doyougroupcustomersforcommercialpurposesIfsohow",
          },
          {
            label:
            "To what degree can you track performance metrics around customers?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_36",
            marketoForm:
            "#cEMATowhatdegreecanyoutrackperformancemetricsaroundcustomers",
          },
          {
            label:
            "How does your sales or commercial team know what products are right for their customers?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_11",
            marketoForm:
            "#cEMAHowdoesyoursalesorcommercialteamknowwhatproductsarerightfortheircustomers",
          },
          {
            label:
            "To what degree does your organization understand the value your products & services create?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_12",
            marketoForm:
            "#cEMATowhatdegreedoesyourorganizationunderstandthevalueyourproductsservicescreate",
          },
          {
            label:
            "Which of the following best describes what your organization's pricing strategy looks like?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_14",
            marketoForm:
            "#cEMAWhichofthefollowingbestdescribeswhatyourorganizationalpricingstrategylookslike",
          },
          {
            label:
            "Which of the following best describes how your organization sets prices (e.g. list prices)?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_16",
            marketoForm:
            "#cEMAWhichofthefollowingbestdescribeshowyourorganizationsetspriceseglistprices",
          },
          {
            label:
            "How often does your organization set or revise standard or list prices?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_17",
            marketoForm:
            "#cEMAHowoftendoesyourorganizationsetorrevisestandardorlistprices",
          },
          {
            label:
            "Which of the following best describes how your organization gives guidance to the sales team on deal prices or negotiated prices?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_18",
            marketoForm:
            "#cEMAWhichofthefollowingbestdescribeshowyourorganizationgivesguidancetothesalesteamondealpricesornegotiatedprices",
          },
          {
            label:
            "Which of the following best describes how your organization manages discounting or price negotiations?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_19",
            marketoForm:
            "#cEMAWhichofthefollowingbestdescribeshowyourorganizationmanagesdiscountingorpricenegotiations",
          },
          {
            label:
            "Which statement best represents how your Sales team sells?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_21",
            marketoForm:
            "#cEMAWhichstatementbestrepresentshowyourSalesteamsells",
          },
          {
            label: "How does Sales know what products to offer or propose?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_23",
            marketoForm: "#cEMAHowdoesSalesknowwhatproductstoofferorpropose",
          },
          {
            label:
            "Which statement best represents how your Sales teams are incentivized?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_24",
            marketoForm:
            "#cEMAWhichstatementbestrepresentshowyourSalesteamsareincentivized",
          },
          {
            label:
            "To what degree do you have or utilize the price waterfall concept?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_27",
            marketoForm:
            "#cEMATowhatdegreedoyouhaveorutilizethepricewaterfallconcept",
          },
          {
            label:
            "Which of the following statements best describes your capabilities to measure & monitor profitability performance?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_28",
            marketoForm:
            "#cEMAWhichofthefollowingstatementsbestdescribesyourcapabilitiestomeasuremonitorprofitabilityperformance",
          },
          {
            label:
            "To what extent do you track competitive price information?",
            type: "radio",
            gravityForm: "#input_" + form_id + "_29",
            marketoForm:
            "#cEMATowhatextentdoyoutrackcompetitivepriceinformation",
          },
          {
            label:
            '"Our product teams are aligned and in-sync with those who set & manage product list prices."',
            type: "radio",
            gravityForm: "#input_" + form_id + "_32",
            marketoForm:
            "#cEMATowhatdegreewouldyouagreewiththefollowingstatementOurproductteamsarealignedandinsyncwiththosewhosetandmanageproductlistprices",
          },
          {
            label:
            '"Our sales teams understand why we set prices they way we do, and are generally supportive of our pricing strategy or methods."',
            type: "radio",
            gravityForm: "#input_" + form_id + "_33",
            marketoForm:
            "#cEMATowhatdegreewouldyouagreewiththefollowingstatementOursalesteamsunderstandwhywesetpricestheywaywedoandaregenerallysupportiveofourpricingstrategyormethods",
          },
          {
            label:
            '"Our sales teams and our product / pricing teams have objectives, goals, and incentives that are generally aligned."',
            type: "radio",
            gravityForm: "#input_" + form_id + "_34",
            marketoForm:
            "#cEMATowhatdegreewouldyouagreewiththefollowingstatementOursalesteamsandourproductpricingteamshaveobjectivesgoalsandincentivesthataregenerallyaligned",
          },
          {
            label: "Customer Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_44",
            marketoForm: "#cEMACustomerDimensionSubtotal",
          },
          {
            label: "Customer Dimension Maturity Level",
            type: "text",
            gravityForm: "#input_" + form_id + "_65",
            marketoForm: "#cEMACustomerDimensionMaturityStage",
          },
          {
            label: "Weighted Customer Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_35",
            marketoForm: "#cEMAWeightedCustomerDimensionSubtotal",
          },
          {
            label: "Product Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_66",
            marketoForm: "#cEMAProductDimensionSubtotal",
          },
          {
            label: "Product Dimension Maturity Level",
            type: "text",
            gravityForm: "#input_" + form_id + "_67",
            marketoForm: "#cEMAProductDimensionMaturityLevel",
          },
          {
            label: "Weighted Product Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_37",
            marketoForm: "#cEMAWeightedProductDimensionSubtotal",
          },
          {
            label: "Pricing Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_39",
            marketoForm: "#cEMAPricingDimensionSubtotal",
          },
          {
            label: "Pricing Dimension Maturity Level",
            type: "text",
            gravityForm: "#input_" + form_id + "_68",
            marketoForm: "#cEMAPricingDimensionMaturityLevel",
          },
          {
            label: "Weighted Pricing Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_69",
            marketoForm: "#cEMAWeightedPricingDimensionSubtotal",
          },
          {
            label: "Sales Channel Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_40",
            marketoForm: "#cEMASalesChannelDimensionSubtotal",
          },
          {
            label: "Sales Channel Dimension Maturity Level",
            type: "text",
            gravityForm: "#input_" + form_id + "_71",
            marketoForm: "#cEMASalesChannelDimensionMaturityLevel",
          },
          {
            label: "Weighted Sales Channel Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_70",
            marketoForm: "#cEMAWeightedSalesChannelDimensionSubtotal",
          },
          {
            label: "Analytics Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_41",
            marketoForm: "#cEMAAnalyticsDimensionSubtotal",
          },
          {
            label: "Analytics Dimension Maturity Level",
            type: "text",
            gravityForm: "#input_" + form_id + "_73",
            marketoForm: "#cEMAAnalyticsDimensionMaturityLevel",
          },
          {
            label: "Weighted Analytics Dimension Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_72",
            marketoForm: "#cEMAWeightedAnalyticsDimensionSubtotal",
          },
          {
            label: "Commercial Process Integration Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_42",
            marketoForm: "#cEMACommercialProcessIntegrationSubtotal",
          },
          {
            label: "Commercial Process Integration Maturity Level",
            type: "text",
            gravityForm: "#input_" + form_id + "_74",
            marketoForm: "#cEMACommercialProcessIntegrationMaturityLevel",
          },
          {
            label: "Weighted Commercial Process Integration Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_75",
            marketoForm: "#cEMAWeightedCommercialProcessIntegrationSubtotal",
          },
          {
            label: "Final Subtotal",
            type: "text",
            gravityForm: "#input_" + form_id + "_43",
            marketoForm: "#cEMAFinalSubtotal",
          },
          {
            label: "Overall Assessment Level",
            type: "text",
            gravityForm: "#input_" + form_id + "_64",
            marketoForm: "#cEMAOverallAssessmentLevel",
          },
          {
            label: "FirstPageSeen",
            type: "text",
            gravityForm: "#input_" + form_id + "_82",
            marketoForm: "input[name='First_Page_Seen__c']",
          },
          {
            label: "FirstWebsiteSource",
            type: "text",
            gravityForm: "#input_" + form_id + "_83",
            marketoForm: "input[name='First_Website_Source__c']",
          },
          {
            label: "FirstReferralURL",
            type: "text",
            gravityForm: "#input_" + form_id + "_84",
            marketoForm: "input[name='First_Referral_URL__c']",
          },
          {
            label: "LastReferralURL",
            type: "text",
            gravityForm: "#input_" + form_id + "_85",
            marketoForm: "input[name='Last_Referral_URL__c']",
          },
          {
            label: "PageFormSubmitted",
            type: "text",
            gravityForm: "#input_" + form_id + "_86",
            marketoForm: "input[name='Page_Form_Submitted__c']",
          },
          {
            label: "PageSubmitted",
            type: "text",
            gravityForm: "#input_" + form_id + "_87",
            marketoForm: "input[name='Page_Submitted__c']",
          },
          {
            label: "FirstUTMCampaign",
            type: "text",
            gravityForm: "#input_" + form_id + "_88",
            marketoForm: "input[name='First_UTM_Campaign__c']",
          },
          {
            label: "FirstUTMSource",
            type: "text",
            gravityForm: "#input_" + form_id + "_89",
            marketoForm: "input[name='First_UTM_Source__c']",
          },
          {
            label: "FirstUTMMedium",
            type: "text",
            gravityForm: "#input_" + form_id + "_90",
            marketoForm: "input[name='First_UTM_Medium__c']",
          },
          {
            label: "FirstUTMTerm",
            type: "text",
            gravityForm: "#input_" + form_id + "_91",
            marketoForm: "input[name='First_UTM_Term__c']",
          },
          {
            label: "FirstUTMContent",
            type: "text",
            gravityForm: "#input_" + form_id + "_92",
            marketoForm: "input[name='First_UTM_Content__c']",
          },
          {
            label: "LastUTMCampaign",
            type: "text",
            gravityForm: "#input_" + form_id + "93",
            marketoForm: "input[name='Last_UTM_Campaign__c']",
          },
          {
            label: "LastUTMSource",
            type: "text",
            gravityForm: "#input_" + form_id + "_94",
            marketoForm: "input[name='Last_UTM_Source__c']",
          },
          {
            label: "LastUTMMedium",
            type: "text",
            gravityForm: "#input_" + form_id + "_95",
            marketoForm: "input[name='Last_UTM_Medium__c']",
          },
          {
            label: "LastUTMTerm",
            type: "text",
            gravityForm: "#input_" + form_id + "_96",
            marketoForm: "input[name='Last_UTM_Term__c']",
          },
          {
            label: "LastUTMContent",
            type: "text",
            gravityForm: "#input_" + form_id + "_97",
            marketoForm: "input[name='Last_UTM_Content__c']",
          },
          {
            label: "GCLID",
            type: "text",
            gravityForm: "#input_" + form_id + "_98",
            marketoForm: "input[name='GCLID__c']",
          },
          
          ];

          for (let i = 0; i < fieldPairs.length; i++) {
            let $value =
            fieldPairs[i]["type"] === "text"
            ? $(fieldPairs[i].gravityForm).val()
            : $(fieldPairs[i].gravityForm)
            .find("input:checked")
            .next("label")
            .text();
            let $target = $(fieldPairs[i].marketoForm);
            $target.val($value);
          }
        }
      }
      );

    // Assign values from Gravity form to Marketo Form for main Comex Survey (After Submit)
    $(document).on("gform_confirmation_loaded", function (event, formId) {
      let namePairs = [
      {
        label: "First Name",
        type: "text",
        gravityForm: "#comEXfname",
        marketoForm: "#FirstName",
      },
      {
        label: "Last Name",
        type: "text",
        gravityForm: "#comEXlname",
        marketoForm: "#LastName",
      },
      {
        label: "Company",
        type: "text",
        gravityForm: "#comEXcompany",
        marketoForm: "#Company",
      },
      {
        label: "Company",
        type: "text",
        gravityForm: "#comEXtitle",
        marketoForm: "#Title",
      },
      {
        label: "Company",
        type: "text",
        gravityForm: "#comEXemail",
        marketoForm: "#Email",
      },
      {
        label: "Phone",
        type: "text",
        gravityForm: "#comEXphone",
        marketoForm: "#Phone",
      },
      {
        label: "Maturity Survey URL",
        type: "link",
        gravityForm: "#originalLink",
        marketoForm: "#cEMAOriginalReportURL",
      },
      {
        label: "Maturity Survey Generate Report URL",
        type: "text",
        gravityForm: "#comEXlink",
        marketoForm: "#ComEx_Maturity_Survey_URL__c",
      },
      {
        label: "Entry ID",
        type: "text",
        gravityForm: "#entryID",
        marketoForm: "#cEMAEntryID",
      },
      {
        label: "Function",
        type: "text",
        gravityForm: "#function",
        marketoForm: "#cEMAFunction",
      },
      {
        label: "Role",
        type: "text",
        gravityForm: "#role",
        marketoForm: "#cEMARole",
      },
      {
        label: "Geographic Location",
        type: "text",
        gravityForm: "#location",
        marketoForm: "#cEMAGeographicLocation",
      },
      {
        label: "Geographic Location",
        type: "text",
        gravityForm: "#tenure",
        marketoForm: "#cEMATenure",
      },
      ];
      for (let i = 0; i < namePairs.length; i++) {
        let $value = $(namePairs[i].gravityForm).text();
        if (namePairs[i].type == "link") {
          $value = $(namePairs[i].gravityForm).attr("href");
        }
        let $target = $(namePairs[i].marketoForm);
        $target.val($value);
      }
      $(".mktoButton").click();
    });
  }
  if ($(".block--cpq-calc").length) {
    $(document).on("gform_confirmation_loaded", function (event, formId) {
      let namePairs = [
      {
        label: "First Name",
        type: "text",
        gravityForm: "#comEXfname",
        marketoForm: "#FirstName",
      },
      {
        label: "Last Name",
        type: "text",
        gravityForm: "#comEXlname",
        marketoForm: "#LastName",
      },
      {
        label: "Company",
        type: "text",
        gravityForm: "#comEXcompany",
        marketoForm: "#Company",
      },
      {
        label: "Company",
        type: "text",
        gravityForm: "#comEXtitle",
        marketoForm: "#Title",
      },
      {
        label: "Company",
        type: "text",
        gravityForm: "#comEXemail",
        marketoForm: "#Email",
      },
      {
        label: "Phone",
        type: "text",
        gravityForm: "#comEXphone",
        marketoForm: "#Phone",
      },
      {
        label: "CPQ Survey URL",
        type: "link",
        gravityForm: "#originalLink",
        marketoForm: "#cpqOriginalReportURL",
      },
      {
        label: "CPQ Survey Generate Report URL",
        type: "text",
        gravityForm: "#comEXlink",
        marketoForm: "#CPQ_Calculator_URL__c",
      },
      {
        label: "FirstPageSeen",
        type: "text",
        gravityForm: "#input_" + formId + "_49",
        marketoForm: "input[name='First_Page_Seen__c']",
      },
      {
        label: "FirstWebsiteSource",
        type: "text",
        gravityForm: "#input_" + formId + "_50",
        marketoForm: "input[name='First_Website_Source__c']",
      },
      {
        label: "FirstReferralURL",
        type: "text",
        gravityForm: "#input_" + formId + "_51",
        marketoForm: "input[name='First_Referral_URL__c']",
      },
      {
        label: "LastReferralURL",
        type: "text",
        gravityForm: "#input_" + formId + "_52",
        marketoForm: "input[name='Last_Referral_URL__c']",
      },
      {
        label: "PageFormSubmitted",
        type: "text",
        gravityForm: "#input_" + formId + "_53",
        marketoForm: "input[name='Page_Form_Submitted__c']",
      },
      {
        label: "PageSubmitted",
        type: "text",
        gravityForm: "#input_" + formId + "_54",
        marketoForm: "input[name='Page_Submitted__c']",
      },
      {
        label: "FirstUTMCampaign",
        type: "text",
        gravityForm: "#input_" + formId + "_55",
        marketoForm: "input[name='First_UTM_Campaign__c']",
      },
      {
        label: "FirstUTMSource",
        type: "text",
        gravityForm: "#input_" + formId + "_56",
        marketoForm: "input[name='First_UTM_Source__c']",
      },
      {
        label: "FirstUTMMedium",
        type: "text",
        gravityForm: "#input_" + formId + "_57",
        marketoForm: "input[name='First_UTM_Medium__c']",
      },
      {
        label: "FirstUTMTerm",
        type: "text",
        gravityForm: "#input_" + formId + "_58",
        marketoForm: "input[name='First_UTM_Term__c']",
      },
      {
        label: "FirstUTMContent",
        type: "text",
        gravityForm: "#input_" + formId + "_59",
        marketoForm: "input[name='First_UTM_Content__c']",
      },
      {
        label: "LastUTMCampaign",
        type: "text",
        gravityForm: "#input_" + formId + "_60",
        marketoForm: "input[name='Last_UTM_Campaign__c']",
      },
      {
        label: "LastUTMSource",
        type: "text",
        gravityForm: "#input_" + formId + "_61",
        marketoForm: "input[name='Last_UTM_Source__c']",
      },
      {
        label: "LastUTMMedium",
        type: "text",
        gravityForm: "#input_" + formId + "_62",
        marketoForm: "input[name='Last_UTM_Medium__c']",
      },
      {
        label: "LastUTMTerm",
        type: "text",
        gravityForm: "#input_" + formId + "_63",
        marketoForm: "input[name='Last_UTM_Term__c']",
      },
      {
        label: "LastUTMContent",
        type: "text",
        gravityForm: "#input_" + formId + "_64",
        marketoForm: "input[name='Last_UTM_Content__c']",
      },
      {
        label: "GCLID",
        type: "text",
        gravityForm: "#input_" + formId + "_65",
        marketoForm: "input[name='GCLID__c']",
      },

      ];
      for (let i = 0; i < namePairs.length; i++) {
        let $value = $(namePairs[i].gravityForm).text();
        if (namePairs[i].type == "link") {
          $value = $(namePairs[i].gravityForm).attr("href");
        }
        let $target = $(namePairs[i].marketoForm);
        $target.val($value);
      }
      $(".mktoButton").click();
    });
}

if ($(".block--roi-calc").length) {
  $(document).on("gform_confirmation_loaded", function (event, formId) {
    let namePairs = [
    {
      label: "First Name",
      type: "text",
      gravityForm: "#comEXfname",
      marketoForm: "#FirstName",
    },
    {
      label: "Last Name",
      type: "text",
      gravityForm: "#comEXlname",
      marketoForm: "#LastName",
    },
    {
      label: "Company",
      type: "text",
      gravityForm: "#comEXcompany",
      marketoForm: "#Company",
    },
    {
      label: "Company",
      type: "text",
      gravityForm: "#comEXtitle",
      marketoForm: "#Title",
    },
    {
      label: "Company",
      type: "text",
      gravityForm: "#comEXemail",
      marketoForm: "#Email",
    },
    {
      label: "Phone",
      type: "text",
      gravityForm: "#comEXphone",
      marketoForm: "#Phone",
    },
    {
      label: "ROI Survey URL",
      type: "link",
      gravityForm: "#originalLink",
      marketoForm: "#roiOriginalReportURL",
    },
    {
      label: "ROI Survey Generate Report URL",
      type: "text",
      gravityForm: "#comEXlink",
      marketoForm: "#ROI_Calculator_URL__c",
    },
    {
      label: "FirstPageSeen",
      type: "text",
      gravityForm: "#input_" + formId + "_136",
      marketoForm: "input[name='First_Page_Seen__c']",
    },
    {
      label: "FirstWebsiteSource",
      type: "text",
      gravityForm: "#input_" + formId + "_137",
      marketoForm: "input[name='First_Website_Source__c']",
    },
    {
      label: "FirstReferralURL",
      type: "text",
      gravityForm: "#input_" + formId + "_138",
      marketoForm: "input[name='First_Referral_URL__c']",
    },
    {
      label: "LastReferralURL",
      type: "text",
      gravityForm: "#input_" + formId + "_139",
      marketoForm: "input[name='Last_Referral_URL__c']",
    },
    {
      label: "PageFormSubmitted",
      type: "text",
      gravityForm: "#input_" + formId + "_140",
      marketoForm: "input[name='Page_Form_Submitted__c']",
    },
    {
      label: "PageSubmitted",
      type: "text",
      gravityForm: "#input_" + formId + "_141",
      marketoForm: "input[name='Page_Submitted__c']",
    },
    {
      label: "FirstUTMCampaign",
      type: "text",
      gravityForm: "#input_" + formId + "_142",
      marketoForm: "input[name='First_UTM_Campaign__c']",
    },
    {
      label: "FirstUTMSource",
      type: "text",
      gravityForm: "#input_" + formId + "_143",
      marketoForm: "input[name='First_UTM_Source__c']",
    },
    {
      label: "FirstUTMMedium",
      type: "text",
      gravityForm: "#input_" + formId + "_144",
      marketoForm: "input[name='First_UTM_Medium__c']",
    },
    {
      label: "FirstUTMTerm",
      type: "text",
      gravityForm: "#input_" + formId + "_145",
      marketoForm: "input[name='First_UTM_Term__c']",
    },
    {
      label: "FirstUTMContent",
      type: "text",
      gravityForm: "#input_" + formId + "_146",
      marketoForm: "input[name='First_UTM_Content__c']",
    },
    {
      label: "LastUTMCampaign",
      type: "text",
      gravityForm: "#input_" + formId + "_147",
      marketoForm: "input[name='Last_UTM_Campaign__c']",
    },
    {
      label: "LastUTMSource",
      type: "text",
      gravityForm: "#input_" + formId + "_148",
      marketoForm: "input[name='Last_UTM_Source__c']",
    },
    {
      label: "LastUTMMedium",
      type: "text",
      gravityForm: "#input_" + formId + "_149",
      marketoForm: "input[name='Last_UTM_Medium__c']",
    },
    {
      label: "LastUTMTerm",
      type: "text",
      gravityForm: "#input_" + formId + "_150",
      marketoForm: "input[name='Last_UTM_Term__c']",
    },
    {
      label: "LastUTMContent",
      type: "text",
      gravityForm: "#input_" + formId + "_151",
      marketoForm: "input[name='Last_UTM_Content__c']",
    },
    {
      label: "GCLID",
      type: "text",
      gravityForm: "#input_" + formId + "_152",
      marketoForm: "input[name='GCLID__c']",
    },
    ];
    for (let i = 0; i < namePairs.length; i++) {
      let $value = $(namePairs[i].gravityForm).text();
      if (namePairs[i].type == "link") {
        $value = $(namePairs[i].gravityForm).attr("href");
      }
      let $target = $(namePairs[i].marketoForm);
      $target.val($value);
    }
    $(".mktoButton").click();
  });
}
});
