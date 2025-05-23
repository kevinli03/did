MathJax = {
    tex: {
      macros: {
        E: "\\mathbb{E}",
        V: "\\mathbb{V}",
        P: "\\mathbb{P}",
        eps: "\\varepsilon",
        pr: "\\varphi",
        b: ['\\class{bolder}{\\mathbf{#1}}', 1],
        mean: "\\overline",
        ind: "\\perp\\!\\!\\!\\!\\perp",
        T: "{\\textcolor{green}{Y^{(1)}_i}}",
        Tred: "{\\textcolor{red}{Y^{(1)}_i}}",
        C: "{\\textcolor{green}{Y^{(0)}_i}}",
        Cred: "{\\textcolor{red}{Y^{(0)}_i}}",
        pT: "{\\textcolor{green}{Y^{(1)}_{it}}}",
        pTred: "{\\textcolor{red}{Y^{(1)}_{it}}}",
        pC: "{\\textcolor{green}{Y^{(0}_{it}}}",
        pCred: "{\\textcolor{red}{Y^{(0)}_{it}}}",
        att: "\\textcolor{blue}{\\tau_\\text{ATT}}",
        Y: "{\\text{Outcome}}",
        D: "{\\text{Treatment}}",
        X: "\\text{Input}",
        cov: "\\class{bolder}{\\mathbf{X}}_{it}'\\class{bolder}{\\beta}",
        unit: "{\\alpha_i}",
        time: "{\\gamma_t}",
        F: "{\\text{Factor}}",
        I: "{\\text{Item}}",
        comp: "{\\text{Component}}",
        feat: "{\\text{Feature}}",
        blue: "\\textcolor{blue}", 
        red: "\\textcolor{red}",
        purple: "\\textcolor{purple}",
        green: "\\textcolor{green}",
        set: "\\mathcal"
      }
    },
    chtml: {
        scale: 1,
        mtextInheritFont: true,
        mtextFont: 'STIX-Web',
    },
    startup: {
      ready() {
        const {CHTMLTextNode} = MathJax._.output.chtml.Wrappers.TextNode;
        const {CHTMLWrappers} = MathJax._.output.chtml.Wrappers_ts;
      
        CHTMLWrappers[CHTMLTextNode.kind] = class extends CHTMLTextNode {
          toCHTML(parent) {
            super.toCHTML(parent);
            if (this.parent.variant === '-explicitFont') {
              const adaptor = this.adaptor;
              const node = adaptor.lastChild(parent);
              if (!adaptor.getStyle(node, 'width')) return;
              const metrics = this.jax.math.metrics;
              const scale = this.parent.getBBox().scale;
              const width = this.getBBox().w * metrics.em * metrics.scale * scale;
              adaptor.setStyle(node, 'width', Math.round(width) + 'px');
            }
          }
        }
        
        MathJax.startup.defaultReady();
      }
    }
  };