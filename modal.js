(function ($) {

    class Modal {
        constructor(element, options, relatedTarget) {
            this.init(element, options, relatedTarget)
        }
        init(element, options, relatedTarget) {
            var that = this;

            this.options = options;

            this.$element = $(element)
                .delegate(this.options.closeBtn, 'click.dismiss.modal', $.proxy(this.hide, this));
            this.toggle(relatedTarget);
        }
        toggle(relatedTarget) {
            return this[!this.isShown ? 'show' : 'hide'](relatedTarget);
        }
        show(relatedTarget) {
            var e = $.Event('show', { relatedTarget });
            if (this.isShown) return;
            this.$element.trigger(e);
            this.isShown = true;
            this.$element.show().toggleClass(this.options.visibilityClass);
            this.$element.attr('aria-hidden', false);
            this.escape();
            this.focus()
        }
        hide(e, relatedTarget) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e = $.Event('hide', { relatedTarget });

            this.$element.trigger(e);

            if (!this.isShown || e.isDefaultPrevented()) return;
            this.isShown = false;
            this.$element.attr('aria-hidden', true);
            this.$element.removeClass(this.options.visibilityClass).addClass('hideModal');
            this.$element.one('animationend', function () {
                $(this).removeClass('hideModal').hide();
            })
        }
        escape() {
            if (this.isShown && this.options.keyboard) {
                if (!this.$element.attr('tabindex')) this.$element.attr('tabindex', -1);
                this.$element.on('keyup.dismiss.modal', (e) => {
                    e.which == 27 && this.hide();
                })
            } else if (!this.isShown) {
                this.$element.off('keyup.dismiss.modal')
            }
        }
        focus() {
            let $focusElem = this.$element.find(this.options.focusOn);
            $focusElem = $focusElem.length ? $focusElem : this.$element;
            $focusElem.focus();
        }
    }

    $.fn.modal = function (option, args) {
        return this.each(function () {
            const $this = $(this);
            let data = $this.data('modal');
            const options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option);
            const _related_target = args ? args.relatedTarget : {};
            if (!data) $this.data('modal', (data = new Modal(this, options, _related_target)));
            if (typeof option == 'string') {
                data[option].apply(data, [].concat(_related_target))
            }
            else if (options.show) data.toggle();
        });

    };
    $.fn.modal.defaults = {
        keyboard: true,
        visibilityClass: "quantum-modal--visible quantum-modal__dialog--fit-full",
        closeBtn: '.quantum-modal__close'
    }
    $(document).on('click', '[data-mj-toggle="modal"]', function (e) {
        e.preventDefault();
        const $this = $(this);
        const href = $this.attr('href');
        const $target = $($this.attr('data-mj-target'));
        const option = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());
        $target.modal(option, { relatedTarget: $this })
    })

}(jQuery))