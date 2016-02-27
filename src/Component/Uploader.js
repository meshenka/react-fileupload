import React from 'react';

/**
* ReactJs test
*/
/**
 * A FileUpload Form component that embed a FilePreview
 */
var FileUpload = React.createClass({
	// We define here the initial state of the component.
	getInitialState: function() {
		return {
			file: false
		};
		},
		/**
		 * things to do when file change.
		 */
	handleFile: function(e) {
        var preview = this.refs.preview;
		var file = e.target.files[0];
		var reader = new FileReader();

			//we have a file and it is an image
		if (file.type.indexOf('image') === 0) {
            reader.readAsDataURL(file);
		} else {
			preview.updatePreview({
				src: '/images/binary-file.png',
				name: file.name,
			});
		}

        reader.onloadend = function() {
        	// console.log("file reader onloadend");
        	preview.updatePreview({
				src: reader.result,
				name: file.name,
			});
        }.bind(this);
	},
	/**
	 * Remove parent Uploader
	 */
	remove: function (){
		this.props.container.removeFileUpload(this.props.index);
	},
	/**
	 */
	render: function() {
		var index = this.props.index;
		return (
			<div id={"question_documents_" + index  }>
				<div id={"question_documents_" +  index + "_file"} className="hidden">
					<div className="form-group">
						<label className="control-label" htmlFor={"question_documents_"+ index +"_file_file"}>Fichier</label>
						<input
							ref="fileInput"
							type="file"
							onChange={this.handleFile}
							id={"question_documents_" +  index + "_file_file"}
							name={"question[documents]["+ index +"][file][file]"}
						/>
					</div>
				</div>
				<Preview name="" src="" onClick={}/>
				<a href="#" onClick={this.remove}
					className="remove-document" title="Supprimer le fichier">
					<img src="/images/remove-doc.png" alt="Supprimer le fichier" />
				</a>
			</div>
		);
	}
});

/**
 * A Symfony Compatible Multi File Upload Component
 * It embed a collection of FileUploader
 */
var FileUploadCollection = React.createClass({

	// We define here the initial state of the component.
	getInitialState: function() {
		return {
			files: []
		};
	},
	removeFileUpload: function(index) {
		var uploaders = this.state.files;
		uploaders = jQuery.grep(uploaders, function(value) {
			return value != index;
		});

		this.setState({ files: uploaders});
	},
	addFileUpload: function(){
		var prevfiles = this.state.files;
		var index = 1;
		if(prevfiles.length > 0 ) {
			var index = prevfiles[prevfiles.length-1] + 1;
		}

		prevfiles.push(index);
		this.setState({files : prevfiles})
	},
	render: function() {
		var container = this;

		var fileUploads = this.state.files.map(function(index) {
		return (
	    	<li key={index}>
	    		<FileUpload index={index} container={container}></FileUpload>
	    	</li>
	      );
	    });

		return (
			<div>
				<ul>
					{fileUploads}
					<li>
						<a href="#" onClick={this.addFileUpload} className="add-document-link" title="Ajouter un Document"><img src="/images/add-doc.png" alt="Ajouter un Document" /></a>
					</li>
				</ul>
			</div>
		);
	}

});
